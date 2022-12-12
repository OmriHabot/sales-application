// get and store login credentials

async function login() {
    let credentials = await fetch('./login-credentials.json').then(result => result.json())
    const username = document.getElementById("uname").value
    const password = document.getElementById("pword").value

    if (credentials.reps[username] == password) {
        console.log("Sales rep successfully logged in!")
        document.getElementById("login").hidden = true
        document.getElementById("sales-rep").hidden = false
    } else if (credentials.managers[username] == password) {
        console.log("Sales manager successfully logged in!")
        document.getElementById("login").hidden = true
        document.getElementById("sales-manager").hidden = false
    } else {
        document.getElementById("credential-warning").hidden = false
    }
}