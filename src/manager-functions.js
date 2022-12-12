// functions for backend
async function createRep() {
    const credentials = await fetch('./login-credentials.json').then(result => result.json())
    const rep_details = await fetch('./rep-details.json').then(result => result.json())
    const name = document.getElementById("r-create-name").value
    const phone_number = document.getElementById("r-create-phone").value
    const region = document.getElementById("r-create-region").value
    const username = document.getElementById("r-create-uname").value
    const password = document.getElementById("r-create-pword").value
    credentials.reps[username] = password
    rep_details[username] = {"name": name, "phone_number": phone_number, "region": region, "password": password}
    downloadToFile(JSON.stringify(credentials), 'login-credentials.json')
    document.getElementById("manager-dashboard").hidden = false
    document.getElementById("rep-create").hidden = true
    // reset entry values
    document.getElementById("r-create-name").value = ""
    document.getElementById("r-create-phone").value = ""
    document.getElementById("r-create-region").value = ""
    document.getElementById("r-create-uname").value = ""
    document.getElementById("r-create-pword").value = ""
}

const downloadToFile = (content, filename) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: 'text/json'});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
      URL.revokeObjectURL(a.href);
  };

function removeRep() {
    // const username =
    // const password = 
}

function reassignDeal() {
    // const from = 
    // const to = 

}

function setCommissionFormula() {
    // const formula =
}

// functions for frontend
function openRepCreationPage() {
    document.getElementById("manager-dashboard").hidden = true
    document.getElementById("rep-create").hidden = false
}