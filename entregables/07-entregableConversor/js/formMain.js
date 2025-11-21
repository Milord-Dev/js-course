//Constantes
const formulario = document.getElementById('formularioUsuario');
const nickInput = document.getElementById('nick');
const emailInput = document.getElementById('email');
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
    else if (emailInput.value.length == 0 || emailInput.value.length > 50){
        error.innerText = 'El email no puede estar vacio y debe tener menos de 50 caracteres';
        emailInput.focus();
        event.preventDefault();
        return false;
    }
    else if (passwordInput.value.length < 8 || passwordInput.value.length > 20){
        error.innerText = 'La contraseña debe tener entre 8 y 20 caracteres';
        passwordInput.focus();
        event.preventDefault();
        return false;
    }
    else {
        alert('Formulario enviado correctamente');
    }
    return true;
}

//Evento
formulario.addEventListener('submit', validacionFormulario);