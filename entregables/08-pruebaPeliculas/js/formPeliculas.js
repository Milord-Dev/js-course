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
    if (nickInput.value.match(/[0-9]/)){
        nickInput.focus();
        event.PreventDefault();
        error.innerText = 'El nick no puede contener numeros';
        return false;
    }
    else if (emailInput.value.length == 0){
        emailInput.focus();
        event.PreventDefault();
        error.innerText = 'Por favor, rellena todos los campos obligatorios';
        return false;
    }
    else if (edadInput.value < 13 || edadInput.value > 80){
        edadInput.focus();
        event.PreventDefault();
        error.innerText = 'La edad debe estar entre 13 y 80 años';
        return false;
    }
    else if (selectInputAnime.value === '' && selectInputRomance.value === '' && selectInputkDrama.value === ''){
        selectInputAnime.focus();
        event.PreventDefault();
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