
export const Nav= ()=>{
  
let nav = document.createElement('div')
  
nav.innerHTML=`
  
<nav class="nav1">
<div class="x"></div>
<lu>
    <ul class="menu_items">
        
            <input class="navInput" type="text" placeholder="  Buscar" >
                  
     
        <li>
            <a href="./formulario.html">login/registro</a>
        </li>
        <li>
            <!-- <a href="#">CATEGORIAS</a>> -->
            <select class="select1">
                <optgroup aria-placeholder="genero" label="Tipo De">
              
                <option>Gebetos</option>

                </optgroup>

                </select>
        </li>
   
    </ul>
</lu>

</nav>
<div class="nav2 ">
<details>

    <summary> </summary>
    <div class="div4">
        <ul class="menu_items">
       

            <li>
                <a href="#">TODOS</a>
            </li>
            <li>
                <a href="#">CATEGORIAS</a>
            </li>
            <li>
                <a href="./formulario.html">login/registro</a>
            </li>
        </ul>             
    </div>
</details>
<a   href="./descripcion.html?id="><div class="col-tex">
    <h2></h2> </div></a>
</div>`;
 
  return nav;
    
   }

