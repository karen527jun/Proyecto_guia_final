const agregarDinero = () =>{
    let total = 0;
    do{
        let respuesta = prompt("Ingresa una cantidad")
        respuesta = parseFloat(respuesta)
        total += respuesta;
        let pregunta = prompt("desea agregrar otra cantidad?s/n")
        if(pregunta.toLowerCase() == 'n'){
            alertify.alert('Total: '+total);
            break;
        }else if (pregunta.toLowerCase()=='s'){
            
        }else{
            alertify.alert('error');
            break;
        }
       
    } while (true)
}
const boton = document.getElementById('agregarDinero');
boton.addEventListener('click',agregarDinero)
