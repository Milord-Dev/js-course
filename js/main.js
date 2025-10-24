/**
 *  Iniciaremos con el verdadero desarrollo de nuestra aplicación
 */

//variables
const nickInput = document.getElementById('nick');
const correoInput = document.getElementById('email');
const tamanoInput = document.getElementById('tamano');
const formulario = document.getElementById('formularioEntrada');

//Funciones
function comprobacionForm(){
    console.log('Formulario enviado');
}

//Evento
formulario.addEventListener('submit', comprobacionForm)