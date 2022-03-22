let miNumero = "18";

//console.log(miNumero);

let edad = Number(miNumero);
//console.log(edad); //Not a number
if ( isNaN(edad) ){ //USO DE ISNAN - NOT A NUMBER
    console.log("No es un numero.")
}else{
    let respuesta = (edad >= 18) ? "Puede votar" : "No puede votar";
    console.log(respuesta);
}
