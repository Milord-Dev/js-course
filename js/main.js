/**
 *  Iniciaremos con el verdadero desarrollo de nuestra aplicación
 */

//variables
const nickInput = document.getElementById('nick');
const correoInput = document.getElementById('email');
const tamanoInput = document.getElementById('tamano');
const edadInput = document.getElementById('edad');
const formulario = document.getElementById('formularioEntrada');

//Funciones
function comprobacionForm(event){
    if (nickInput.value.length < 4 || correoInput.value.length == 0){
        alert('Por favor, rellena todos los campos');
        console.log('Faltan campos por rellenar');
        nickInput.focus();
        event.preventDefault();
        return false;
    }
    else if (tamanoInput.value == "0"){
        alert('Por favor, selecciona un tamaño del juego');
        console.log('No se ha seleccionado un tamaño del juego');
        tamanoInput.focus();
        event.preventDefault();
        return false;
    }
    else if (edadInput.value < 7 || edadInput.value > 99){
        alert('Por favor, introduce una edad válida (entre 7 y 99 años)');
        console.log('edad no valida');
        edadInput.focus();
        event.preventDefault();
        return false;
    }
    else{
        alert('Formulario enviado correctamente');
    }
    return true;
}

//Evento
formulario.addEventListener('submit', comprobacionForm)