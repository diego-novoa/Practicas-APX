const arrayOriginal = [
  [3, 567, 23],
  [23, 54, 23],
  [27, 457, 67],
  [34, 675, 12],
  ];
  
const arraySumas = []; 
  
for (let indice in arrayOriginal) {
  const subarray = arrayOriginal[indice];
  let suma = 0;
  for(let i=0; i<subarray.length; i++){
    suma += subarray[i];
    }
    arraySumas.push(suma);
  }
    console.log(arraySumas); 
  // Output esperado: [593, 100, 551, 721]
  