//Constantes
const formulario = document.getElementById('formularioUsuario');
const nickInput = document.getElementById('nick');
const emailInput = document.getElementById('emaik');
const passwordInput = document.getElementById('password');
const btnEnviar = document.getElementById('btn_enviar');

//Funciones de validacion de campos
function validacionFormulario(event){
    if (nickInput.value.length < 4 || nickInput.value.length > 15){
        error.innerText = 'El nick debe tener entre 4 y 15 caracteres';
        nickInput.focus();
        event.preventDefault();
        return false;
    }
}