 import { crearPelis } from "./render.js";

export const  funcionBuscarPeli=(pelis)=>{
let buscarPeli = document.querySelector(".navInput");
console.log("BUuuuuuuusacador:sssssssssssssssssssss ",buscarPeli.value);
if(buscarPeli.value==" "){
    console.log("no texto en b");
let tf=pelis;
console.log("🚀 ~ file: Buscador.js ~ line 9 ~ funcionBuscarPeli ~ tf", tf)

  crearPelis(tf) 
  
    }
    else{
    console.log("BUuuuuuuusacador:   ...",pelis);
    buscarPeli.addEventListener("keyup",(e)=>{

    let indicador=pelis.filter((untf)=> untf.titulo.toLowerCase().indexOf(e.target.value.toLowerCase())>-1 )
    
    console.log("texto en Buscar:",indicador );
    let r=crearPelis(indicador)
  
    }
    
    
    
    )}}
