const calcularInteres = () => { 
    const cantidad = document.getElementById('cantidad').value;
    if(cantidad && cantidad != undefined && cantidad != ' '){
        const interes = 0.6;
        const anhos = 4;
        const calculo = parseFloat(cantidad)*interes*anhos
        const capital_final = parseFloat(cantidad)+calculo
        document.getElementById('capital_final').textContent = capital_final
        document.getElementById('anhos').textContent = anhos
        document.getElementById('total').textContent = calculo
        console.log(cantidad+5,cantidad,calculo);
    }else{
        console.log('a');
    }
}

const boton = document.getElementById('calcularInteres');
boton.addEventListener('click', calcularInteres)