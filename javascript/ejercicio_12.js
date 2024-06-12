$(document).ready(function () {
    

    $('#btn-generar').click(function (e) { 
        e.preventDefault();

        // Se muestra el formulario
        $('#formulario-autogenerado').css("display", "block");

        let contenidoRow = "";
        let nombreCampo = $('#tipo-campo option:selected').text();
        let tipoCampo = $('#tipo-campo').val();

        // Casos excepcionales: creción de un botón y un radio button
        // Si es un botón
        if (nombreCampo == "Enviar datos") {
            contenidoRow = "<td colspan='2'><button class='btn btn-primary w-100'>Enviar</button></td>";
        } // Si es un radio button
        else if (nombreCampo == "Genero") {
            let input = "<div class='container'><div class='row'><div class='col'><input type='radio' name='rdb-genero' id='masculino' class='form-check-input'><label for='masculino'>&nbsp;Masculino</label></div><div class='col'><input type='radio' name='rdb-genero' id='femenino' class='form-check-input'><label for='femenino'>&nbsp;Femenino</label></div></div></div>";

            contenidoRow = "<td><label>Genero</td></label>" + "<td>" + input + "</td>";
        } else {
             let etiqueta = '<label>' + nombreCampo + '</label>'
            let input = "<input type=" + tipoCampo + " class='form-control'>";
            
            contenidoRow = "<td>" + etiqueta + "</td>" + "<td>" + input + "</td>";
        }
        
        $('#formulario-autogenerado table').append("<tr>" + contenidoRow + "</tr>");
    });
});