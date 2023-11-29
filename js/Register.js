//Code made by Max Vilà Ruiz

//Global functions:
function help(){
    alert("Ajuda'ns a millorar! \nSi tens algun problema amb l'aplicatiu o has trobat algun error en el sistema, fes-nos-ho saber al següent correu electrònic:    'maxvilaruiz123@gmail.com'. \n\nMoltes gràcies.")
}



//Database:
const database = [['maxvilaruiz123@gmail.com', 'Exemple', 'Max']];


//Register code:
const submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let verify_email = false;
    let verify_pw = false;
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let password2 = document.querySelector('#password2');
    let result = `, ['${email.value}', '${password.value}', '${name.value}']`;

    for (let i = 0; i < database.length; i++) {
        if (email.value !== database[i][0]) { //To find if the email is already being used.
            if (password.value === password2.value) { //To confirm that both passwords are equals.
                alert(`Perfecte! Per tal que es desin els canvis, envia la següent informació al correu electrònic 'maxvilaruiz123@gmail.com': \n\n${result}`);
                window.location.href = 'Home.html';
                break;
            } else {
                alert("S'ha produït un error.");
            }
        } else {
            alert("S'ha produït un error.");
        }
    }
})