/**
    * Aqui se haran los llamados para mostrar los datos del usuario.
*/
const nickGuardado = sessionStorage.getItem('nick');
const generoAnimeGuardado = sessionStorage.getItem('generoAnime');
const generoRomanceGuardado = sessionStorage.getItem('generoRomance');
const generoKDramaGuardado = sessionStorage.getItem('generoKDrama');

nickUsuario.value = nickGuardado;
serieAnime.value = generoAnimeGuardado;
serieRomance.value = generoRomanceGuardado;
serieKDrama.value = generoKDramaGuardado;