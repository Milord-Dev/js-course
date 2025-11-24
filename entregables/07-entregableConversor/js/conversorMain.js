// Conversor de moneda JS

//constantes
const monedaSelect = document.getElementById('moneda');
const cantidadInput = document.getElementById('cantidadUsuario');
const btnConvertir = document.getElementById('btn_convertir');
const resultadoYen = document.getElementById('monedaYen');
const resultadoDolarNZ = document.getElementById('monedaNZ');
const resultadoLibra = document.getElementById('monedaLE');
const error = document.getElementById('error');

//Funciones para convertir monedas
function seleccionMoneda(){
    //Limpiar mensaje de error
    error.textContent = '';

    //Validar que el usuario ingrese una cantidad válida
    if (cantidadInput.value === '' || cantidadInput.value <= 0){
        error.textContent = 'Ingrese una cantidad válida mayor a 0';
        return;
    }

    //Convertir según la moneda seleccionada
    if (monedaSelect.value === '1'){
        resultadoYen.value = parseFloat(cantidadInput.value) * 154.12
        resultadoDolarNZ.value = parseFloat(cantidadInput.value) * 1.78;
        resultadoLibra.value = parseFloat(cantidadInput.value) * 0.80;        
    }
    else if (monedaSelect.value === '2'){
        resultadoYen.value = parseFloat(cantidadInput.value) * 169.14;
        resultadoDolarNZ.value = parseFloat(cantidadInput.value) * 1.95;
        resultadoLibra.value = parseFloat(cantidadInput.value) * 0.88;
    }
    else{
        error.textContent = 'Seleccione una moneda válida';
    }
};

//Evento para el botón convertir
btnConvertir.addEventListener('click', seleccionMoneda)