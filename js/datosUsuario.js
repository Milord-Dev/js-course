//Crear funciones para que guardar la sesión del usuario

function datosUsuario(nick){
    sessionStorage.setItem('nick', nick.value);
}
function obtenerNick(){
    let nick = sessionStorage.getItem('nick');
    //monstrar por consola
    console.log(nick);
}