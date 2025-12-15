/*
    Aquí van las funciones relacionadas con el manejo de datos del usuario.
    Por ejemplo, guardar y obtener el nick del usuario en sessionStorage.
*/

function datosUsuario(nick) {
    sessionStorage.setItem('nick', nick.value);
}
function obtenerNick() {
    
}