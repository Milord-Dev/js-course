// AQUI VAMOS A CAPTAR O GUARDAR LOS DATOS DEL USUARIO PARA EL SESSIONSTORAGE 

function datosUsuarios(nick,correo,edad,tamanoTexto){
    //llave valor
    sessionStorage.setItem('nick',nick.value);
    sessionStorage.setItem('correo',correo.value);
    sessionStorage.setItem('edad',edad.value);
    sessionStorage.setItem('tamano', tamanoTexto);
}

//Funcion rapida para comprobar si todo funciona
/*function mostrarDatos(){
    const nickGuardado = sessionStorage.getItem('nick');
    const correoGuardado = sessionStorage.getItem('correo');
    const edadGuardada = sessionStorage.getItem('edad');
    const tamanoGuardado = sessionStorage.getItem('tamano');
    
    console.log(nickGuardado,correoGuardado,edadGuardada,tamanoGuardado);
}*/