/**
 *  Iniciaremos con el verdadero desarrollo de nuestra aplicación
 */

//variables
const BtnJugar = document.getElementById('btn_jugar');
const inputEmail = document.getElementById('email');

//Funciones
function comprobacion(){
    console.log("Función comprobación iniciada");
}

function validarCorreo(){
    console.log(inputEmail.value);
}

//Eventos
BtnJugar.addEventListener('click', comprobacion, validarCorreo);