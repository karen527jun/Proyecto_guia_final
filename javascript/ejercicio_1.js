const calcularInteres = () => { 
    const cantidad = document.getElementById('cantidad').value;
    if()
   
    const interes = 0.6;
    const anhos = 4;
    const calculo = parseFloat(cantidad)*interes*anhos
    document.getElementById('interes').textContent = interes
    document.getElementById('anhos').textContent = anhos
    document.getElementById('total').textContent = calculo
    console.log(cantidad+5,cantidad,calculo);

}

const boton = document.getElementById('calcularInteres');
boton.addEventListener('click', calcularInteres)