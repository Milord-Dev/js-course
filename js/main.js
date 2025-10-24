/*
    JS para comprobacion de formulario

// Capturar el valor del input
const nickInput = document.getElementById('nick');
console.log(nickInput.nodeType);
nickInput.value = "Milord"
console.log(nickInput.value);

const tamanoItem = document.getElementById('tamano');
console.log("Saca el valor de la poscion selecionada: " + tamanoItem.value);
console.log("Saca el texto de la seleccion del usuario: " + tamanoItem.options[tamanoItem.selectedIndex].text);
*/ 

// Variables
const nickUsuario = document.getElementById('nick');
const correoElectronico = document.getElementById('email');
const tamanoJuego = document.getElementById('tamano');

// Comprobacion del valor de las variables
function validarFormulario(){
    console.log ("El nick del usuario es: " + nickUsuario.value);
    console.log ("El correo electronico es: " + correoElectronico.value);
    console.log ("El tamaño del juego es: " + tamanoJuego.value);
}

validarFormulario();    

//Prueba en donde se usa el on click para ver que funciona el evento 
function prueba(){
    console.log("Funciona la prueba");
}