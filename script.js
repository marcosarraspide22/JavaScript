let nombre, edad, total = 0;
let entradasCompradas = [];

document.getElementById('submit-btn').addEventListener('click', function() {
    nombre = document.getElementById('userName').value;
    edad = parseInt(document.getElementById('userAge').value);

    if (nombre && edad && edad >= 18) {
        document.querySelector('.form-container').style.display = 'none';
        document.getElementById('ticket-options').style.display = 'block';
    } else {
        alert('Debes ser mayor de 18 años para comprar entradas.');
    }
});

document.getElementById('fullGeneral').addEventListener('click', function() {
    total += 2500;
    entradasCompradas.push('FULL FESTIVAL GENERAL');
    showFinishButton();
});

document.getElementById('sabadoGeneral').addEventListener('click', function() {
    total += 1700;
    entradasCompradas.push('SÁBADO 1 FEV. GENERAL');
    showFinishButton();
});

document.getElementById('domingoGeneral').addEventListener('click', function() {
    total += 1700;
    entradasCompradas.push('DOMINGO 2 FEV. GENERAL');
    showFinishButton();
});

document.getElementById('fullVIP').addEventListener('click', function() {
    total += 3200;
    entradasCompradas.push('FULL FESTIVAL VIP');
    showFinishButton();
});

document.getElementById('sabadoVIP').addEventListener('click', function() {
    total += 2200;
    entradasCompradas.push('SÁBADO 1 FEV. VIP');
    showFinishButton();
});

document.getElementById('domingoVIP').addEventListener('click', function() {
    total += 2200;
    entradasCompradas.push('DOMINGO 2 FEV. VIP');
    showFinishButton();
});

document.getElementById('finish-button').addEventListener('click', function() {
    let totalIVA = total * 0.22;
    let totalConIVA = total + totalIVA;

    document.getElementById('results').style.display = 'block';
    document.getElementById('results').innerHTML = `
        <p>Subtotal: $${total}</p>
        <p>IVA (22%): $${totalIVA}</p>
        <p>TOTAL A PAGAR: $${totalConIVA}</p>
        <p>Entradas compradas: ${entradasCompradas.join(", ")}</p>
    `;
});

function showFinishButton() {
    document.getElementById('finish-button').style.display = 'block';
}
