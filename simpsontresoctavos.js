function funcion(x) {
    return 1 / x; // Definición de la función f(x) = 1/x
}

function tresoctavos(a, b, n) {
    let h = (b - a) / n;
    let suma = funcion(a) + funcion(b);
    let suma_parcial = suma;
    let resultado_parcial = (3 * h / 8) * suma;
    let x;

    let tablaHtml = "<table id='tablatresoctavos'>";
    tablaHtml += "<tr><th>i</th><th>xi</th><th>f(xi)</th><th>ci*f(xi)</th><th>Suma parcial</th></tr>";

    for (let i = 1; i < n; i++) {
        x = a + i * h;
        let ci = (i % 3 === 0) ? 2 : 3; // Coeficiente ci

        let fx = funcion(x);
        let cifx = ci * fx;
        suma += cifx;
        resultado_parcial += (3 * h / 8) * cifx;

        tablaHtml += `<tr><td>${i}</td><td>${x.toFixed(4)}</td><td>${fx.toFixed(4)}</td><td>${cifx.toFixed(4)}</td><td>${resultado_parcial.toFixed(4)}</td></tr>`;
    }

    tablaHtml += "</table>";

    document.getElementById("tablatresoctavos").innerHTML = tablaHtml; // Colocar la tabla en el elemento con id "resultados"

    console.log(`Resultado final de la aproximación: ${resultado_parcial.toFixed(4)}`);
    return resultado_parcial.toFixed(4);
}

function main() {
    let n = 6; // Cantidad de intervalos
    let a = 1.0; // Límite inferior
    let b = 5.0; // Límite superior
    let integral;

    console.log(`Intervalo de integración: [${a}, ${b}]`);
    integral = tresoctavos(a, b, n);
    console.log(`\nAproximación de la integral: ${integral}`);
    document.write("Método: 1.6157");
}

main();
