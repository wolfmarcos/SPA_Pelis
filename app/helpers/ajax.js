export const ajax=async ( props) =>{
    let{   urlA,
        urlB,
        urlC, } =props;
    
    let datos= await fetch(urlC )
    console.log("preparado Conecion A", datos);
    let pelis= await datos.json() 
    
    console.log("pelis Data", pelis);
    // crearPelis(pelis)
   
   
    return pelis



}