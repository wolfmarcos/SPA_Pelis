// import { funcionBuscarPeli } from "./components/Buscador.js";
// import { crearPelis } from "./components/render.js";
import { Headers } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Nav } from "./components/Nav.js";

import { Router } from "./components/Router.js";

export const App = async () => {
        const docu = document.querySelector("#root");
        docu.innerHTML=""
        docu.innerHTML += '<h1 class="titulo">TRAILERFLEX</h1>';

        docu.appendChild(Headers(Nav()));
        docu.appendChild(Main());


        
        
        Router()
}







//  let resu = await funcionBuscarPeli(Objeos)
//       let datoHtml =crearPelis({Objeos,Descrpcion,funcionBuscarPeli}  )
// ajax({  url:api crearPelis Main})
   // let {Objeos,Descrpcion,funcionBuscarPeli}= datos
    // let tf=await funcionBuscarPeli(Objeos)
    // let descri=Descrpcion