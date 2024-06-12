
function procesarNumeros() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alertify.error("Debe llenar todos los campos de entrada.");
        return;
    }

    if (numero1 >= numero2) {
        alertify.error("El primer número debe ser menor que el segundo.");
        return;
    }

    let pares = 0;
    let impares = 0;
    let mensajePares = "";
    let mensajeImpares = "";

    for (let i = numero1; i <= numero2; i++) {
        if (i % 2 === 0) {
            pares++;
            mensajePares += i + ", ";
        } else {
            impares++;
            mensajeImpares += i + ", ";
        }
    }

    mensajePares = mensajePares.slice(0, -2); // Eliminar la última coma y espacio
    mensajeImpares = mensajeImpares.slice(0, -2); // Eliminar la última coma y espacio

    let resultado = `Los números pares e impares encontrados dentro del rango de números ${numero1} y ${numero2} son los siguientes:\n`;
    if (pares > 0) {
        resultado += `\nSe encontraron ${pares} números pares: [${mensajePares}]`;
    }

    if (impares > 0) {
        resultado += `\nSe encontraron ${impares} números impares: [${mensajeImpares}]`;
    }

    if (pares === 0 && impares === 0) {
        resultado += "\nNo se encontraron números pares ni impares en el rango especificado.";
    }

    alertify.alert('Resultado',resultado);
}