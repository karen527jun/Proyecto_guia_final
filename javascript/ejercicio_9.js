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