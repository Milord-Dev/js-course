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
    if (monedaSelect.value === '1'){
        resultadoYen.value = cantidadInput.value * 154.12;
        resultadoDolarNZ.value = cantidadInput.value * 1.78;
        resultadoLibra.value = cantidadInput.value * 0.80;
    }
    else if (monedaSelect.value === '2'){
        resultadoYen.value = cantidadInput.value * 169.14;
        resultadoDolarNZ.value = cantidadInput.value * 1.95;
        resultadoLibra.value = cantidadInput.value * 0.88;
    }
    else{
        error.innerText = 'Seleccione una moneda válida';
    }
};