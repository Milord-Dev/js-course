//Importar la función de datosUsuario.js
getDatosUsuario();

//Comprobar si el usuario tiene una sesión iniciada
if (!comprobarUsuario()) {
    //Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'index.html';
}