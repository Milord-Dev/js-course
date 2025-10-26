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
    if (nickInput.value.length == 0 || correoInput.value.length == 0){
        alert('Por favor, rellena todos los campos');
        console.log('Faltan campos por rellenar');
        event.preventDefault();
        nickInput.focus();
        return false;
    }
    else if (tamanoInput.value == "0"){
        alert('Por favor, selecciona un tamaño del juego');
        console.log('No se ha seleccionado un tamaño del juego');
        event.preventDefault();
        tamanoInput.focus();
        return false;
    }
    else{
        alert('Formulario enviado correctamente');
        event.preventDefault();
    }
    return true;
}

//Evento
formulario.addEventListener('submit', comprobacionForm)