const $body= document.querySelector("body");
const $selectColor = document.querySelector("#colors");

$selectColor.addEventListener("change",(e)=>{
    if(e.target.value === "red"){// === es una igualacion muy estricta, exactamente debe de ser el mismo tipo de dato
        $body.className = "";
        $body.classList.add(`red`);//MUY IMPORTANTE SE DEBE DE UTILIZAR BACKSTICK PARA INDICAR QUE ESA PLABARA SE VA AGREGAR A LAS CLASE DEL ELEMENTO QUE ESTA EN EL HTML
    }else if(e.target.value==="blue"){
        $body.className = ""; //limpia el nombre de la clase de ese elemento
        $body.classList.add(`blue`);//MUY IMPORTANTE SE DEBE DE UTILIZAR BACKSTICK PARA INDICAR QUE ESA PALABRA SE VA AGREGAR A LA CLASE DEL ELEMENTO QUE ESTA EN EL HTML
    }else if(e.target.value === "green"){
        $body.className = "";
        $body.classList.add(`green`);
    }
});