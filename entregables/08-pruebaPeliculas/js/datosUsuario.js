/*
    Aquí van las funciones relacionadas con el manejo de datos del usuario.
    Por ejemplo, guardar y obtener el nick del usuario en sessionStorage.
*/
// El primer nick que se recibe en la funcion es un objeto input que guarda el nick del usuario
function datosUsuario(nick, generoAnime, generoRomance, generoKDrama) {
    // este segundo nick es la clave valor para guardar en sessionStorage y recibe el valor del nick que recibimos arriba
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('generoAnime', generoAnime.value);
    sessionStorage.setItem('generoRomance', generoRomance.value);
    sessionStorage.setItem('generoKDrama', generoKDrama.value);
}
