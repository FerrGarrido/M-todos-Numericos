// Definición de la función f(x) que deseas integrar
function funcion(x) {
    // Aquí debes implementar la función f(x)
    // En este ejemplo, se define una función constante
    if (x === 1) return 1.000;
    else if (x === 2) return 0.500;
    else if (x === 3) return 0.333;
    else if (x === 4) return 0.250;
    else if (x === 5) return 0.200;
    else return 0; // Si x está fuera del rango conocido
}

function calcularSimpson() {
    // Intervalo de integración [a, b]
    const a = 1; // límite inferior
    const b = 5; // límite superior

    // Valores de c_i proporcionados
    const ci = [1, 4, 2, 4, 1];

    // Crear el contenido de la tabla en formato HTML
    let tableHTML = "<table>";
    tableHTML += "<tr><th>x</th><th>f(x)</th><th>c_i</th><th>c_i*f(x_i)</th></tr>";

    let xi = a;
    const h = (b - a) / 4; // Dividimos en 4 subintervalos
    let suma = 0; // Inicializamos la suma
    let i = 0;
    while (xi <= b) {
        const cifxi = ci[i] * funcion(xi);
        suma += cifxi; // Sumamos el producto ci*f(xi) a la suma total
        tableHTML += `<tr><td>${xi.toFixed(1)}</td><td>${funcion(xi).toFixed(3)}</td><td>${ci[i]}</td><td>${cifxi.toFixed(3)}</td></tr>`;
        xi += h;
        i++;
    }

    // Cerrar la tabla
    tableHTML += "</table>";

    // Insertar la tabla en el HTML
    document.getElementById("simpsontercio").innerHTML = tableHTML;

    // Mostrar la suma total
    console.log(`\nLa suma de c_i*f(x_i) es: ${suma.toFixed(3)}`);
    console.log(`1/3 suma cif(xi)= ${parseFloat(suma / 3).toFixed(3)}`);
    
    // Calcular 1/3 de la suma
    const tercioSuma = suma / 3;

    // Mostrar la suma total y 1/3 de la suma en el HTML
    const resultadountercioHTML = `
        <p>La suma de Ci*f(Ci) es: ${suma.toFixed(3)}</p>
        <p>1/3 Método Simpson: ${tercioSuma.toFixed(3)}</p>
    `;
    document.getElementById("resultadountercio").innerHTML = resultadountercioHTML;
}

