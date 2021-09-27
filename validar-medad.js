const edadInicio=document.querySelector("#edad")


let valMedad=()=>{
    const edadUsuario=parseInt(document.querySelector("#input").value);
    edadUsuario>=18? 
    edadInicio.textContent="Eres mayor de edad": 
    edadInicio.textContent="Eres menor de edad";
};


/*Funciona pero teine errores con el return
const prueba=parseInt(document.querySelector("#input").value);

function  mayoriaEdad(a){
    if(a>=18){
        return "Eres nayor de edad";
    }else{
        return "No eres mayor de edad";
    }
}

let cambiarValor=()=>{
    edadInicio.textContent=mayoriaEdad(prueba);
}*/