/*Devuelve un arreglo de los elementos que tenga esa etiqueta


const texto= document.getElementById("text");
texto.innerHTML = "Este texto esta "*/


//con text content podemos escribir desde el JS 
const texto = document.querySelector("#texto");//en caso de que sea una clase se escribiria .Nclase
texto.textContent = "Estoy exribiendo desde Java Script";

//Crear elemtos desde JS

const div = document.createElement("div");
const body = document.querySelector("body");

body.append(div);