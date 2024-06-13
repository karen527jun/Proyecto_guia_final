function calculate() {
    const inputs = document.querySelectorAll('#inputs input');
    let positiveCount = 0;
    let negativeCount = 0;
    let nullCount = 0;

    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (value > 0) {
            positiveCount++;
        } else if (value < 0) {
            negativeCount++;
        } else {
            nullCount++;
        }
    });

    document.getElementById('positiveCount').innerText = positiveCount;
    document.getElementById('negativeCount').innerText = negativeCount;
    document.getElementById('nullCount').innerText = nullCount;
}

document.addEventListener('DOMContentLoaded', () => {
    const inputFields = document.getElementById('inputFields');

    // Crear 10 campos de entrada
    for (let i = 0; i < 10; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Número ${i + 1}`;
        inputFields.appendChild(input);
    }
});

function calculateNumbers() {
    const inputs = document.querySelectorAll('#inputFields input');
    let positiveCount = 0;
    let negativeCount = 0;
    let nullCount = 0;

    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            return;
        }
        if (value > 0) {
            positiveCount++;
        } else if (value < 0) {
            negativeCount++;
        } else {
            nullCount++;
        }
    });

    document.getElementById('positiveCount').innerText = positiveCount;
    document.getElementById('negativeCount').innerText = negativeCount;
    document.getElementById('nullCount').innerText = nullCount;
}
