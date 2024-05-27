//Crear un número aleatorio entre el 1 y 20, si es par mostrar true seguido 
//el número si es impar mostrar  false seguido del número, 
//utilizar el operador ternario.

let aleatorio = Math.ceil(Math.random() * 20);
const respuesta = (aleatorio % 2 === 0) ? true : false

console.log(`${respuesta} - ${aleatorio}`)
