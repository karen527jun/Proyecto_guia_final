const agregarDinero = () =>{
    let total = 0;
    try {
        do{
        let respuesta = prompt("Ingresa una cantidad")
        respuesta = parseFloat(respuesta)
        total += respuesta;
        let pregunta = prompt("desea agregrar otra cantidad?s/n")
        if(pregunta.toLowerCase() == 'n'){
            alertify.alert('SUMA TOTAL','Total: '+total);
            break;
        }else if (pregunta.toLowerCase()=='s'){
            
        }else{
            alertify.error('error...');
            break;
        }
       
    } while (true)
    } catch (error) {
        alertify.error('error...');
    }
    
}
const boton = document.getElementById('agregarDinero');
boton.addEventListener('click',agregarDinero)
