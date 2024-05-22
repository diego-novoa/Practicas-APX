const verdadero = true;
const falsoA = false;
const falsoB = false;

const a = verdadero && falsoA;
const b = verdadero || falsoA;
const c = falsoA && falsoB;

const resultados = [a, b, c];
console.log("Estos son los resultados", resultados);


console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
