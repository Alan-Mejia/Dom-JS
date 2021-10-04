let $botonagrega = document.querySelector("#botonagrega");//Hacemos el enlace de la variable $botonagrega con el elemento del hatml qu eposee el id "botonagrega";
let $lista = document.querySelector("#lista");


$botonagrega.addEventListener("click",()=>{//le agregamos el evento a la variable $botonagrega para que cada vez que de click se ejecute el siguiente bloque de codigo
    const agregali= document.createElement(`li`);//creamos una nueva variable que va a ser igual a = agregar un li pero dado que vamos agregar algo al html lo debemos introducir entre backstick `aquiintroducimoselelementod `
    agregali.innerHTML = `Elemento agregado`;//A la variable que crea un elemento li utilizamos la propiedad .innerHTML para que ese elemento se muestre en el HTML
    $lista.appendChild(agregali);//La variable $lista va agregar un elemento hijo es decir el elemento estara dentro de un elemento padre, en este caso dentro del <ol></ol>
});