//Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera: 
// Insuficiente, Suficiente, Bien, Excelente

let calificación = 11

if (calificación <5 && calificación >=0){
  console.log("calificación: Insuficiente ")
}else if(calificación === 5){
	console.log("calificación: Suficiente")
}else if (calificación >5 && calificación <=8 ){
	console.log("calificación: Bien")
}else if (calificación >8 && calificación <=10){
	console.log("calificación: Excelente")
}else{
	console.log("calificación no valida")
}
    