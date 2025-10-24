/**
 *  Iniciaremos con el verdadero desarrollo de nuestra aplicación
 */

//variables
const nickInput = document.getElementById('nick');
const correoInput = document.getElementById('email');
const tamanoInput = document.getElementById('tamano');
const formulario = document.getElementById('formularioEntrada');

//Funciones
function comprobacionForm(event){
    if (nickInput.value.length == 0 || correoInput.value.length == 0 || tamanoInput.value.length == 0){
        alert('Por favor, rellena todos los campos');
        console.log('Faltan campos por rellenar');
        event.preventDefault();
    }else{
        alert('Formulario enviado correctamente');
        event.preventDefault();
    }
}

//Evento
formulario.addEventListener('submit', comprobacionForm)