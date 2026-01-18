//Donde captaremos lo datos de usuarios

// variables globales 
const nickGuardado = sessionStorage.getItem('nick');
const correoGuardado = sessionStorage.getItem('correo');
const edadGuardada = sessionStorage.getItem('edad');
const tamanoGuardado = sessionStorage.getItem('tamano');

nickUsuario.value = nickGuardado;
correoUsuario.value = correoGuardado;
edadUsuario.value = edadGuardada;
tamanoUsuario.value = tamanoGuardado;