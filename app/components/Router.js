
import { funcionBuscarPeli } from "./Buscador.js";
import { Descrpcion } from "./Descripcion.js";

import { crearPelis } from "./render.js";



export const Router = (props) => {

    console.log("Router:",props);

    let {hash} = location;
if (hash == "" || hash == "#/") {
    
 
    crearPelis(props)

    funcionBuscarPeli(props)


}else if (hash == "#/descripcion/# "){
   
    document.querySelector(".content").innerHTML = Descrpcion()
}
console.log(hash);

}