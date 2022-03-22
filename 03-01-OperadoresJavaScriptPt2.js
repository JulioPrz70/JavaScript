//OPERADORS DE MAYOR Y MENOR...
let a = 3, b = 3, c = "3";

let z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

//NUMERO PAR
let d = 9;

if ( d % 2 == 0 ){
    console.log("Es un número par.")
}
else{
    console.log("Es un número impar.")
}


//ES MAYOR DE EDAD
let edad = 14, adulto = 18;

if ( edad >= adulto ){
    console.log("Es un adulto.");
}
else{
    console.log("Es menor de edad.");
}


//OPERADOR LOGICO AND
let valor = 5;
let valMin = 0, valMax = 10;

if ( valor >= valMin && valor <= valMax){
    console.log("Dentro del rango.");
}
else{
    console.log("Fuera del rango.")
}

//OPERADOR LOGICO OR
//REGRESA TRUE SI CUALQUIER OPERANDO ES TRUE
let vacaciones = false, diaDescanso = true;

if ( vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego.");
}
else{
    console.log("El padre esta ocupado.")
}

//OPERADOR TERNARIO
let resultado = (3 > 2) ? "Verdadero" : "False";
console.log(resultado);

//EJEMPLO HACIENDO USO DEL OPERADOR TERNARIO
let numero = 10;
let siPar = (numero % 2 == 0) ? "Número Par" : "Número Impar";
console.log(siPar);