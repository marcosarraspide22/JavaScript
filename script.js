let nombre = prompt("¿Cuál es tu nombre?");
let edad;

do {
    edad = parseInt(prompt("Gracias, " + nombre + ". Ingresa tu edad:"));
    
    if (isNaN(edad) || edad < 1) {
        alert("Por favor, ingresa una edad válida.");
    }
} while (isNaN(edad) || edad < 1);

if (edad >= 18) {
    alert(`Bienvenido, ${nombre}. Puedes ingresar al sitio.`);
} else {
    alert(`Lamentablemente, ${nombre}, no tienes la edad mínima para ingresar al sitio. Debes ser mayor de 18 años.`);
}

let total = 0;
let entradasCompradas = [];
const IVA_TASA = 0.22;

let opciones = `
Elige una opción de entrada para agregar al carrito:
1 - FULL FESTIVAL GENERAL $2500 + IVA
2 - SÁBADO 1 FEB. GENERAL $1700 + IVA
3 - DOMINGO 2 FEB. GENERAL $1700 + IVA
4 - FULL FESTIVAL VIP $3200 + IVA
5 - SÁBADO 1 FEB. VIP $2200 + IVA
6 - DOMINGO 2 FEB. VIP $2200 + IVA`;

function calcularIVA(precio) {
    return precio * IVA_TASA;
}

while (true) {
    let opcion = prompt(opciones);

    switch (opcion) {
        case "1":
            total += 2500;
            entradasCompradas.push("FULL FESTIVAL GENERAL");
            alert("Has seleccionado: FULL FESTIVAL GENERAL por $2500 + IVA");
            break;
        case "2":
            total += 1700;
            entradasCompradas.push("SÁBADO 1 FEB. GENERAL");
            alert("Has seleccionado: SÁBADO 1 FEB. GENERAL por $1700 + IVA");
            break;
        case "3":
            total += 1700;
            entradasCompradas.push("DOMINGO 2 FEB. GENERAL");
            alert("Has seleccionado: DOMINGO 2 FEB. GENERAL por $1700 + IVA");
            break;
        case "4":
            total += 3200;
            entradasCompradas.push("FULL FESTIVAL VIP");
            alert("Has seleccionado: FULL FESTIVAL VIP por $3200 + IVA");
            break;
        case "5":
            total += 2200;
            entradasCompradas.push("SÁBADO 1 FEB. VIP");
            alert("Has seleccionado: SÁBADO 1 FEB. VIP por $2200 + IVA");
            break;
        case "6":
            total += 2200;
            entradasCompradas.push("DOMINGO 2 FEB. VIP");
            alert("Has seleccionado: DOMINGO 2 FEB. VIP por $2200 + IVA");
            break;
        default:
            alert("Opción no válida, por favor elige una opción entre 1 y 6.");
            continue;
    }

    let continuar = prompt("¿Deseas agregar otra entrada al carrito? (1. Sí / 2. No)").toLowerCase();
    if (continuar !== '1' && continuar !== 'sí') {
        break; 
    }
}

let totalIVA = calcularIVA(total);
let totalConIVA = total + totalIVA;

alert(`Resumen de compra de ${nombre}:
Entradas compradas: ${entradasCompradas.join(", ")}
Subtotal: $${total.toFixed(2)}
IVA (22%): $${totalIVA.toFixed(2)}
TOTAL A PAGAR: $${totalConIVA.toFixed(2)}`);
