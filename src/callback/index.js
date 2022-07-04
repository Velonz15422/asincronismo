function suma (num1, num2){
    return num1 + num2;
}

function calc (num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2,23, suma));

setTimeout(function(){
    console.log('hola js')
}, 5000);

function saludo (nombre){
    console.log(`hola ${nombre}`)
}

setTimeout(saludo, 5000, 'velonz');