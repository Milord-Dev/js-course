console.log('-- INDICE DE MASA CORPORAL --');
console.log('----------------------------');

for(let altura = 165; altura <= 195; altura = altura + 5){
    let pesomin = 60 + (altura - 165);
    let pesomax = 80 + (altura - 165);
    
    for(let peso = pesomin; peso <= pesomax; peso = peso + 10){
        console.log(`Altura: ${altura} cm - Peso: ${peso}`);
    }
};