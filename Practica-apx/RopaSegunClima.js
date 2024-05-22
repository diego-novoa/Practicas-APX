//Imaginate que estás desarrollando un programa para ayudar a la gente a elegir su ropa en base al clima. 
//El programa tiene que recibir como input la temperatura actual (en grados Celsius) y devolver una recomendación de qué ropa usar. La tabla de recomendaciones es así:

//Si hace menos de 5 grados, la recomendación es un "abrigo heavy".
//Si hace entre 5 y 15 grados, se puede ir con "un bucito y campera".
//Si hace entre 16 y 20 grados, se puede usar "sweater y pantalon largo".
//Si hace entre 21 y 25 grados, se recomienda "remera mangas cortas".
//Si hace más de 25 grados, lo mejor es "remera y shorts".
//Utiliza el siguiente código base y probá modificando el valor de temperatura 
//para ver como reacciona tu código a distintos valores.

const argumento = process.argv[2];
const temperatura = parseInt(argumento);

let recomendacion; 

if (temperatura < 5) {
  recomendacion = "abrigo heavy";
} else if (temperatura >= 5 && temperatura <= 15) {
  recomendacion = "un bucito y campera";
} else if (temperatura >= 16 && temperatura <= 20) {
  recomendacion = "sweater y pantalon largo";
} else if (temperatura >= 21 && temperatura <= 25) {
  recomendacion = "remera mangas cortas";
} else {
  recomendacion = "remera y shorts";
}

console.log("La temperatura actual es de", temperatura)
console.log("Te recomendamos usar", recomendacion);
