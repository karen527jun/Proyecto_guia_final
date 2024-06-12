$(document).ready(function () {
    

    

    $('#btn-resutado').click(function (e) { 
        e.preventDefault();
        
        let num1 = $("#primer-numero").val();
    let num2 = $("#segundo-numero").val();

        console.log("num1"+num1);
        console.log("num2"+num2);

        if(num1 == "" || num2 == ""){
            // alerta de error
            Swal.fire({
                title: 'Error!',
                text: 'Ambos números son requeridos',
                icon: 'error',
                confirmButtonText: 'OK'
            }) 
        } else if (isNaN(num1) || isNaN(num2)) {
            Swal.fire({
                title: 'Error!',
                text: 'Solo se permiten numeros',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        } else {
            // Borramos el contenido actual
            $('#resultado').html("");
            
            // Convertimos ambos valores a números (decimales)
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            // Agregamos los resultados obtenidos
            $('#resultado').append("Suma: " + sumar(num1, num2) + "<br>");
            $('#resultado').append("Resta: " + restar(num1, num2) + "<br>");
            $('#resultado').append("Multiplicación: " + multiplicar(num1, num2) + "<br>");
            
            // Pequeña excepción al dividir por 0

            if (num2 == 0) {
                $('#resultado').append("No es posible dividir sobre 0");
            } else {
                $('#resultado').append("División: " + dividir(num1, num2) + "<br>");
            }
        }

        

    });
});

function sumar(num1, num2) {
    return (num1 + num2);
}

function restar(num1, num2) {
    return (num1 - num2);
}

function multiplicar(num1, num2) {
    return (num1 * num2);
}

function dividir(num1, num2) {
    if (num2 != 0) {
        return (num1 / num2);
    }   
}