console.log('-- INDICE DE MASA CORPORAL --');
console.log('----------------------------');

for(let estatura = 165; estatura <= 195; estatura += 5){
    if (estatura == 165){
        console.log(`Estatura y peso de: 165cm`);
        console.log("----------------------------");
        for(let peso = 60; peso <= 80; peso += 5){
            console.log(`Estatura: ${estatura}cm, Peso: ${peso}kg`);
        }
    }
    else if (estatura == 170){
        console.log(`Estatura y peso de: 170cm`);
        console.log("----------------------------");
        for(let peso = 65; peso <= 85; peso += 5){
            console.log(`Estatura: ${estatura}cm, Peso: ${peso}kg`);
        }
    }
    else if (estatura == 175){
        console.log(`Estatura y peso de: 175cm`);
        console.log("----------------------------");
        for(let peso = 70; peso <= 90; peso += 5){
            console.log(`Estatura: ${estatura}cm, Peso: ${peso}kg`);
        }
    }
    else if (estatura == 180){
        console.log(`Estatura y peso de: 180cm`);
        console.log("----------------------------");
        for(let peso = 75; peso <= 95; peso += 5){
            console.log(`Estatura: ${estatura}cm, Peso: ${peso}kg`);
        }
    }
    else if (estatura == 185){
        console.log(`Estatura y peso de: 185cm`);
        console.log("----------------------------");
        for(let peso = 80; peso <= 100; peso += 5){
            console.log(`Estatura: ${estatura}cm, Peso: ${peso}kg`);
        }
    }
    else if (estatura == 190){
        console.log(`Estatura y peso de: 190cm`);
        console.log("----------------------------");
        for(let peso = 85; peso <= 105; peso += 5){
            console.log(`Estatura: ${estatura}cm, Peso: ${peso}kg`);
        }
    }
}