function procesarNumeros() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alertify.error("Debe llenar todos los campos de entrada.");
        return;
    }

    if (numero2 <= 0 || numero2 > 10) {
        alertify.error("El segundo número debe estar entre 1 y 10.");
        return;
    }

    const resultado = numero1 / numero2;
    alertify.alert('Resultado', `La herencia que corresponde a cada hijo es de: $ ${resultado.toFixed(2)}`);
}
