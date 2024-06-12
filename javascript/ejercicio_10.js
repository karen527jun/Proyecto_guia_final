document.addEventListener("DOMContentLoaded", function() {
    var botonIniciar = document.getElementById("btn-iniciar");
    var saldo = document.getElementById("saldo");
    
    // Saldo inicial
    saldo.innerHTML = 200;

    function realizarTransacciones(e){
    e.preventDefault();
        var respuesta;

        do {
            respuesta = prompt("¿Qué desea hacer: abonar o retirar? (a/r)");

            if (respuesta == "a" || respuesta == "A") {
                respuesta = prompt("Ingrese el monto a abonar");

                if (!isNaN(respuesta)) {
                    saldo.innerHTML = parseFloat(saldo.innerHTML) + parseFloat(respuesta);
                }
            }

            if (respuesta == "r" || respuesta == "R") {
                respuesta = prompt("Ingrese el monto a retirar");

                if (!isNaN(respuesta)) {
                    if (parseFloat(saldo.innerHTML) >= parseFloat(respuesta)) {
                        saldo.innerHTML = parseFloat(saldo.innerHTML) - parseFloat(respuesta);
                    }else{
                        alert("No hay fondos suficientes");
                    }
                    
                }
            }

            respuesta = prompt("¿Desea realizar otra trasacción? (s/n)");

        } while (respuesta == "s" || respuesta == "S");
    }

    botonIniciar.addEventListener("click", realizarTransacciones);
}); 