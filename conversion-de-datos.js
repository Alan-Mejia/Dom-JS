const nombre = prompt("¿Cual es tu nombre?");
const edad = parseInt(prompt("¿Cual es tu edad?"));//parseInt sirve para cambiar de tipo de dato string a un number

console.log(typeof(nombre));
console.log(typeof(edad));

//para cambiar de number a string
console.log(typeof(edad.toString)); //cambiamos de tipo de dato number a string, pero solo se esta cambiando al momento de realizar la impresion de la variable

