//Crear funciones para que guardar la sesión del usuario

//variable global (es posible ya que tenemos los datos de los usuarios)
let nick;

//funcion para guardar los datos del usuario (en especifico el nick)
function datosUsuario(nick){
    sessionStorage.setItem('nick', nick.value);
}

//funcion para obtener los datos del usuario
function getDatosUsuario(){
    nick = sessionStorage.getItem('nick');
    //monstrar por consola
    console.log(nick);
}

//funcion para comprobar si el usuario ya tiene una sesión iniciada
function comprobarUsuario(){
    if (nick === null || nick === undefined || nick === '') {
        sessionStorage.setItem('errorForm', 'Debes iniciar sesión para acceder al juego');
        return false;
    }
    else{
        return true;
    }
}