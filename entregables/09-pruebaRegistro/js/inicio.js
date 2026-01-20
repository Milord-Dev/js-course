//Donde captaremos lo datos de usuarios

//variables
const nickGuardado = sessionStorage.getItem('nick');
const correoGuardado = sessionStorage.getItem('correo');
const edadGuardada = sessionStorage.getItem('edad');
const tamanoGuardado = sessionStorage.getItem('tamano');

//comprobacion para ver si el usuario esta logeado
if(!comprobarUsuario()){
    window.location.href = 'registro.html';
}

nickUsuario.value = nickGuardado;
correoUsuario.value = correoGuardado;
edadUsuario.value = edadGuardada;
tamanoUsuario.value = tamanoGuardado;