const tablaMultiplicar = ()=>{
     const cantidad = document.getElementById('cantidad').value;
     if(cantidad > 0 && cantidad <=10){
         let tabla = '\n';
         for(let i = 0;i<=10;i++){
            tabla = tabla +'| '+ i +' x '+cantidad+' = '+i*cantidad+' |\n'
            console.log(tabla);
            alertify.alert('TABLA DEL '+cantidad,tabla)
         }
     }else{
        alertify.error('Debe ser un número entre el 1 y el 10')
     }
}

const boton = document.getElementById('boton')
boton.addEventListener('click',tablaMultiplicar)