//Crear funciones para que guardar la sesión del usuario

//variable global 
let nick;

function datosUsuario(nick){
    sessionStorage.setItem('nick', nick.value);
}
function obtenerNick(){
    nick = sessionStorage.getItem('nick');
    //monstrar por consola
    console.log(nick);
}

function comprobarUsuario(){
    if (nick === null || nick === undefined || nick === '') {
        return false;
    }
    else{
        return true;
    }
}