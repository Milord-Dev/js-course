//JS PARA LA COMPRIBACION DE REGISTRO

//VARIBLES
const nickInput = document.getElementById('nick');
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('contrasena');
const edadInput = document.getElementById('edad');
const tamanoInput = document.getElementById('tamano');
const formulario = document.getElementById('formularioEntrada');
const error = document.getElementById('error');

//MENSAJE DE ERROR DE INICIO
const errorForm = sessionStorage.getItem('errorFormulario');
if(errorForm){
    error.innerText = errorForm; //HACE QUE EL OBJETO ERROR DEL HTML RECIBA EL MENSAJE DE ERROR
    //LO ELIMINA DESPUES DE SER COMPROBADO PARA DEJAR LIMPIO
    sessionStorage.removeItem(errorForm);
}

//COMPROBACION DE NULL EN LOS ELEMENTOS
if(!nickInput || !correoInput || !contrasenaInput || !edadInput || !tamanoInput || !formulario || !error){
    console.error('No se han podido obtener todos los elementos del DOM necesarios');
}

//FUNCIONES DE COMPROBACIÓN
function comprobarFormulario(event){
    if(!/^[a-zA-Z_]+$/.test(nickInput.value)){
        nickInput.focus();
        event.preventDefault();
        error.innerText = 'El nick no puede contener numeros';
        return false;
    }
    else if(correoInput.value.length == 0){
        correoInput.focus();
        event.preventDefault();
        error.innerText = 'Por favor, rellena todos los campos obligatorios';
        return false;
    }
    else if(contrasenaInput.value.length == 0){
        contrasenaInput.focus();
        event.preventDefault();
        error.innerText = 'Por favor, rellena todos los campos obligatorios';
        return false;
    }
    else if(edadInput.value < 13 || edadInput.value > 80){
        edadInput.focus();
        event.preventDefault();
        error.innerText = 'La edad debe estar entre 13 y 80 años';
        return false;
    }
    else if(tamanoInput.value == "0"){
        tamanoInput.focus();
        event.preventDefault();
        error.innerText = 'Por favor, selecciona un tamaño del juego';
        return false;
    }
    // SI ES CORRECTO PASARA ESTO
    else{
        //obetener el texto del select
        const tamanoTexto = tamanoInput.options[tamanoInput.selectedIndex].text;

        error.innerText = '';
        datosUsuarios(nickInput,correoInput,edadInput,tamanoTexto);
        return true;
    }
}
formulario.addEventListener('submit',comprobarFormulario);