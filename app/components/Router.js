
import { funcionBuscarPeli } from "./Buscador.js";
import { Descrpcion } from "./Descripcion.js";

import { crearPelis } from "./render.js";
import { ajax } from "../helpers/ajax.js";
import url from "../helpers/urls.js";
let arrayP1=JSON.parse(localStorage.getItem("arrayP1")) 

export const Router = async () => {
    
    // console.log("Router:",props);

    let {hash} = location;
if (hash == "" || hash == "#/") {
    
    let objeto = await ajax(url)
    crearPelis(objeto)

     funcionBuscarPeli(objeto)


}else if (hash ==`#/descripcion/${arrayP1.id}`){
//   let main= document.querySelector(".main")
//    main.innerHTML=""
    
   console.log("local",arrayP1);
    document.querySelector(".main").innerHTML= Descrpcion(arrayP1)
    // localStorage.clear
}
console.log(hash);

}