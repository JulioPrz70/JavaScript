/*EL USO DE VAR NO ES LO RECOMENDABLE PARA USAR,
POR LO QUE SE USA LA PALABRA RESERVADA: LET. Y CONST PARA CONSTANTES*/

let nombre;
nombre = 'Julio';
console.log(nombre);

const apellido = 'Perez';
//apellido = 'Lara'; No es posible asignar un dato nuevo a esa variable.


/*Recomendaciones para el nombramiento de variables*/
let nombrePersona = 'Julio Perez';
console.log( nombrePersona );

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);

/*SENCIBILIDAD DE JAVASCRIPT EN NO DEFINIR ENTRE MAYUSCULAS Y MINUSCULAS*/
let nombreCompleto = "Julio Perez";
let nombrecompleto = "Juan Perez";
console.log(nombreCompleto);
console.log(nombrecompleto);

//FORMAS CORRECTAS DE DECLARAR VARIABLES
let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;

//FORMAS INCORRECTAS
/*
let 1nombreCompleto; no esta permitido iniciar el nombre de la variable en numeros
*/