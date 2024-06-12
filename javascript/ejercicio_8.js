function calcularNotas() {
    const alumnos = 5;
    let aprobados = 0;
    let reprobados = 0;
    let promedios = [];

    for (let i = 1; i <= alumnos; i++) {
        let nombre = document.getElementById(`nombre${i}`).value;
        let nota1 = parseFloat(document.getElementById(`nota${i}_1`).value);
        let nota2 = parseFloat(document.getElementById(`nota${i}_2`).value);
        let nota3 = parseFloat(document.getElementById(`nota${i}_3`).value);

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