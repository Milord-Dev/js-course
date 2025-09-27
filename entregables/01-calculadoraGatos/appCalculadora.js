console.log('-- Calculadora años Gatunos --');
let edadHumana = 0;
for( let edadGato = 1; edadGato <= 22; edadGato++){
    if(edadGato == 1){
        edadHumana = 15
    }else if(edadGato == 2){
        edadHumana = 24
    }else{
        edadHumana +=  4;
    }
    console.log(`El gato tiene ${edadHumana} años en edad humana`);
}