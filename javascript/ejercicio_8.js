function calcularNotas() {
    
    const alumnos = 5;
    let aprobados = 0;
    let reprobados = 0;
    let promedios = [];
    // Si no se ingresa nada
    // Para los nombres de estudiante

    // Paara las notas

    // Si ingresa valores no numericos en las notas
    
    for (let i = 1; i <= alumnos; i++) {
        let nombre = document.getElementById(`nombre${i}`).value;

        // Nombre vacío
        if (nombre == "") {
            nombre = "Estudiante";
        }

        let nota1 = document.getElementById(`nota${i}_1`).value;
        let nota2 = document.getElementById(`nota${i}_2`).value;
        let nota3 = document.getElementById(`nota${i}_3`).value;

        // Si la nota está vacía
        if (nota1 == "") nota1 = 0;
        if (nota2 == "") nota2 = 0;
        if (nota3 == "") nota3 = 0;

        // Si acaso existen campos con datos inválidos
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alertify.error("Existen campos con datos inválidos");

            if(isNaN(nota1)) nota1 = 0;
            if(isNaN(nota2)) nota2 = 0;
            if(isNaN(nota3)) nota3 = 0;
        }
        
        let promedio = (nota1 + nota2 + nota3) / 3;
        promedios.push(`${nombre}: ${promedio.toFixed(2)}`);

        if (promedio >= 5) {
            aprobados++;
        } else {
            reprobados++;
        }
    }

    document.getElementById("promedios").innerHTML = `Promedios: <br> ${promedios.join('<br>')}`;
    document.getElementById("aprobados").innerHTML = `Número de aprobados: ${aprobados}`;
    document.getElementById("reprobados").innerHTML = `Número de reprobados: ${reprobados}`;
}
