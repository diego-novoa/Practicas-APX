// Pedir una hora, minuto y segundo 
// y mostrar la hora en el segundo siguiente

let hora=2;
let minuto=59;
let segundo=59;

segundo ++
if(segundo >= 60 ){
  segundo=0;
  minuto++;

	if(minuto >= 60){
		minuto=0;
		hora++;

		if(hora >= 24){
			hora=0;
		}
	}
}
console.log(`La hora es: ${hora}: ${minuto}: ${segundo}`);


//let hora=2;
//let minuto=59;
//let segundo=59;

//segundo ++
//if(segundo >= 60 ){
//  segundo=0;
//  minuto++;

//	if(minuto >= 60){
//		minuto=0;
//		hora++;

//		if(hora >= 24){
//			hora=0;
//		}
//	}
//}
//console.log(`La hora es: ${hora}: ${minuto}: ${segundo}`);

