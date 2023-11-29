// Code made by Max Vilà Ruiz

//Global functions:
function help(){
    alert("Ajuda'ns a millorar! \nSi tens algun problema amb l'aplicatiu o has trobat algun error en el sistema, fes-nos-ho saber al següent correu electrònic:    'maxvilaruiz123@gmail.com'. \n\nMoltes gràcies.")
}



//Database:
const database = [['maxvilaruiz123@gmail.com', 'Example', 'Max']];


//Log in code:
const submit = document.querySelector('#submit');
let verify = true;

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    for (let i = 0; i < database.length; i++) {
        if (email.value === database[i][0] & password.value === database[i][1]) {
            window.location.href = 'Home.html';
            verify = false;
            break;
        }
    }
    if (verify) {
        alert("S'ha produït un error, si us plau torna-ho a intentar.\nTambé és probable que el teu compte encara no s'hagi enregistrat, per tant, si has tingut algun error en iniciar sessió, notifica-ho al correu 'maxvilaruiz123@gmail.com'.")
    }
})