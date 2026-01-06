/**
    *  Aqui van las vadilaciones del formulario de usuario.
*/
//variables 
const nickInput = document.getElementById('nick');
const emailInput = document.getElementById('email');
const edadInput = document.getElementById('edad');
const selectInputAnime = document.getElementById('generoAnime');
const selectInputRomance = document.getElementById('generoRomance');
const selectInputkDrama = document.getElementById('generoKDrama');
const formulario = document.getElementById('formularioPelicula');
const error = document.getElementById('error');

//comprobacion de null
if (!nickInput || !emailInput || !edadInput || !selectInputAnime || !selectInputRomance || !selectInputkDrama || !formulario || !error){
    console.error('No se han podido obtener todos los elementos del DOM necesarios');
}

//Funciones de Validacion
function comprobarForm(event){
    if (!/^[a-zA-Z_]+$/.test(nickInput.value)){
        nickInput.focus();
        event.preventDefault();
        error.innerText = 'El nick no puede contener numeros';
        return false;
    }
    else if (emailInput.value.length == 0){
        emailInput.focus();
        event.preventDefault();
        error.innerText = 'Por favor, rellena todos los campos obligatorios';
        return false;
    }
    else if (edadInput.value < 13 || edadInput.value > 80){
        edadInput.focus();
        event.preventDefault();
        error.innerText = 'La edad debe estar entre 13 y 80 años';
        return false;
    }
    else if (selectInputAnime.value === '0' || selectInputRomance.value === '0' || selectInputkDrama.value === '0'){
        selectInputAnime.focus();
        event.preventDefault();
        error.innerText = 'Debes seleccionar al menos un genero de pelicula';
        return false;
    }
    // Si todo es correcto
    else{
        error.innerText = '';
        datosUsuario(nickInput)
        return true;
    }
}
//Evento al enviar el formulario
formulario.addEventListener('submit', comprobarForm);