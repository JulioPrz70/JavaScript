let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("El resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b; //Residuo de la operación
console.log("Residuo de la operación: " + z);

z = a ** b;
console.log("Resultado de operador exponente: " + z)

//INCREMENTO Y DECREMENTO
a = 3, b = 2;
z = a + b;

//INCREMENTO
//PRE-INCREMENTO (El operador ++ antes de la variable)
z = ++a;
console.log("Variable a: " + a);
console.log("Variable z: " + z);

//POST-INCREMENTE (El operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//DECREMENTO
//PREDECREMENTO
z = --a;
console.log(a);
console.log(z);

//POSTDECREMENTO
z = b--;
console.log(b);
console.log(z);


//PRESEDENCIA DE OPERADORES
a = 3, b = 2, c = 1;
let d = 4;

z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a ) * b / c;
console.log(z);


//OPERADORES DE ASIGNACIÓN
let a1 = 1;

a1 += 3; // a = a + 3
console.log(a1);

a1 -= 2;
console.log(a1);

a1 *= 3;
console.log(a1);

a1 /= 2;
console.log(a1);

a1 %= 4;
console.log(a1);

a1 **= 2;
console.log(a1);


//OPERADORES DE COMPARACION
let valor1 = 3, valor2 = 2, valor3 = "3";

let resultado = valor1 == valor2; //Se revisa el valor sin importar el tipo de dato
console.log(resultado);

resultado = valor1 === valor3; //Revisa si los valor son iguales pero tambien los tipos de datos
console.log(resultado);

//OPERADOR DISTINTO A
let num1 = 1, num2 = 4, num3 = "4";
console.log("Los números son distintos: ", num1 != num2);
console.log("Los números son distintos: ", num2 !== num3);  //Son iguales en valor pero diferente tipo por eso regresa ->