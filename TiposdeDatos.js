//TIPO DE DATOS
/*Ejemplos de tipos de datos en JAVASCRIPT*/

//Tipo de dato String
var nombre = "Carlos";
console.log(nombre);

nombre = 10.5; 
//console.log("Cambio de valor a la variable:", typeof nombre); //Se usa TYPEOF para ver el tipo de dato que es empleado.
console.log("Cambio de valor a la variable:", typeof nombre);

//Tipo de dato numerico
var numero = 12;
console.log(numero);

//Tipo de dato Objeto
var objeto = {
    nombre : "Juan",        //En objetos se usa dos puntos en lugar del simbolo de igual =.
    apellido : "Perez",     //Se puede usar doble comilla o comilla simple
    telefono : "9964884040"
}
console.log(typeof objeto);

//Tipo de dato Boolean
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion)

//Tipo de dato Symbol
var simbolo = Symbol("Mi Simbolo");
console.log(typeof simbolo);

//Tipo clase es una funcion
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);

//Tipo de dato undefined
var x;
console.log(typeof x);

x= undefined;
console.log(typeof x);

//Null = Ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);