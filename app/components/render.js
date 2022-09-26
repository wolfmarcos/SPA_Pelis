
 import {Descrpcion} from "./Descripcion.js"

export const crearPelis =async(tf)=>{


 
  
    


    console.log("inicia crear pelis: ",tf);
    let sumaPeli = new DocumentFragment
   


 

    if (tf.length>=0) {
       

        document.querySelector(".content").innerHTML=""
 
        for ( const untf of tf) {
        
        
            console.log("titulossss: ",untf.titulo);
            let div22 = document.createElement('div');
            div22.id = untf.id;
           div22.className = 'contenedor';
         
           div22.innerHTML=`
      
           <a >
           <div class="tarjeta">
               <div class="imgC">
                   <img class="img"  id="img2"  src=" ${untf.poster}" alt="">
             </div>
    
               <div class="texto">
                  <i class="ico1"  data-feather="search">${untf.titulo}   </i>
    
                   <div class="col-tex">
                       <h2>
                           genero: 
                           <h3>  ${untf.genero}</h>
                       </h2>
                   </div>
                   <div class="col-tex">
                       <h2>
                       temporadas:
                           <h3>${untf.temporadas}</h>
                       </h2>
    
                   </div>
               </div>
            </div>
       </a>
    
         `;
    
        
       
    div22.addEventListener("click",()=>{
        Descrpcion(untf)
        console.log("selecion",untf)});
    
          sumaPeli.append(div22)
          document.querySelector(".content").append(sumaPeli)
          }
          
      
    
    }
       
    else{ console.log("lo que entrooooo b")
    alert( " no se encuentra")
//    return (sumaPeli.innerHTML='<h6 class="titulo "></H6> <h6 class="titulo "> La Buequeda realizada , No se encuentra  </H6><h6 class="titulo "> </H6> <h6 class="titulo "> Gracias Por elegirnos </H6>');
}
       
        }

