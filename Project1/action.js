function getDigiName(){
     
const form  = document.getElementById('digiName');

form.addEventListener('submit', (event) => {
    const digiName = form.elements['digiName'];
    let digimonName = digiName.value;
    alert("Test");
    return(digimonName);
    }
);
}