export const Descrpcion= (untf)=>{
    console.log("Descrpcion")
    // let descripcionPeli = document.querySelector(".descipcion");
    // let descrp = document.createElement("div")




let descrpciones= `
<div class="tarjeta2">
<header>
           
<a class="icov" href="index.html">

    <span class=" material-symbols-outlined">
        reply
        </span> 
</a>

</header>
<main class="main">
<H2 class="cate"> Informacion de Contenido</H2>

<div id="pintar" class="content2">

 
    </div>
    <h6 class="titulo "> ${untf.titulo}  </H6>


</main>

<div id="pintar" class="content2">
<div class="tarjeta">


<div class="imgC">

<img class="img"   src=" ${untf.poster}" alt="">
</div>


</div >



<div  class="col-tex2">
  

        <h2>4categoria:</h2>
        <h3> ${untf.categoria}</h3>
        <h2>Genero:</h2>
        <h3> ${untf.genero}</h3>
        <h2>Resumen:</h2>
        <h3>${untf.resumen}</h3>
        <h2>temporadas:</h2>
        <h3>${untf.temporadas}</h3>
        <h2>Reparto:</h2>
        <h3>${untf.reparto}</h3>
    
</div>
</div>
</div>             `

   
   

    // descripcionPeli.innerHTML = 
   return descrpciones;
   }
   
  
 
 

    