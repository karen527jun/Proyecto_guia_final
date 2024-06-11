document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const carBrand = document.getElementById('carBrand').value;
    const carPrice = parseFloat(document.getElementById('carPrice').value);

    let taxRate, discountRate;

    switch (carBrand) {
        case '1':
            taxRate = 0.05;
            discountRate = 0.10;
            break;
        case '2':
            taxRate = 0.07;
            discountRate = 0.15;
            break;
        case '3':
            taxRate = 0.04;
            discountRate = 0.20;
            break;
        case '4':
            taxRate = 0.08;
            discountRate = 0.30;
            break;
        default:
            alert('Por favor selecciona una marca válida.');
            return;
    }

    const taxAmount = carPrice * taxRate;
    const discountAmount = carPrice * discountRate;
    const finalAmount = carPrice + taxAmount - discountAmount;

    alert(`Nombre del Cliente: ${customerName}\nTotal Impuesto: $${taxAmount.toFixed(2)}\nTotal Descuento: $${discountAmount.toFixed(2)}\nNeto Final a Pagar: $${finalAmount.toFixed(2)}`);
});
