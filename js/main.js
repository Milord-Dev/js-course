/**
 *  Iniciaremos con el verdadero desarrollo de nuestra aplicación
 */

//variables
const nickInput = document.getElementById('nick');
const correoInput = document.getElementById('email');
const edadInput = document.getElementById('edad');
const tamanoInput = document.getElementById('tamano');
const formulario = document.getElementById('formularioEntrada');
const error = document.getElementById('error'); 

//comprobacion de null 
if (!nickInput || !correoInput || !edadInput || !tamanoInput || !formulario || !error){
    console.error('No se han podido obtener todos los elementos del DOM necesarios');
}

//Funciones
function comprobacionForm(event){
    if (nickInput.value.length < 4){
        console.log('Faltan campos por rellenar');
        nickInput.focus();
        event.preventDefault();
        error.innerText = 'Por favor, rellena todos los campos obligatorios';
        return false;
    }
    else if (correoInput.value.length == 0){
        console.log('Faltan campos por rellenar');
        correoInput.focus();
        event.preventDefault();
        error.innerText = 'Por favor, rellena todos los campos obligatorios';
        return false;
    }
    else if (edadInput.value < 7 || edadInput.value > 99){
        console.log('edad no valida');
        edadInput.focus();
        error.innerText = 'Por favor, introduce una edad válida (entre 7 y 99 años)';
        event.preventDefault();
        return false;
    }
    else if (tamanoInput.value == "0"){
        console.log('No se ha seleccionado un tamaño del juego');
        tamanoInput.focus();
        error.innerText = 'Por favor, selecciona un tamaño del juego';
        event.preventDefault();
        return false;
    }
    else{
        alert('Formulario enviado correctamente');
    }
    return true;
}

//Evento
formulario.addEventListener('submit', comprobacionForm);