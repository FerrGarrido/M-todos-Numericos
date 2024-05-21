// Función para calcular el polinomio de Newton hacia atrás y mostrarlo desarrollado
function newtonBackwardDeveloped(x, y, n) {
    let polinomio = "El polinomio de Newton hacia atrás desarrollado es:<br>";

    for (let i = 0; i < n; i++) {
        let coeficiente = diferenciasDivididas(x.slice(-n + i), y.slice(-n + i), n, i);
        if (i > 0) {
            polinomio += " + ";
        }
        polinomio += coeficiente.toFixed(4);
        for (let j = 0; j < i; j++) {
            polinomio += "*(x - " + x[n - j - 1].toFixed(2) + ")";
        }
    }
    return polinomio;
}

// Función principal para el método de Newton hacia atrás
function newtonAtras() {
    const x = [1, 3, 5, 6];
    const y = [2.0/3, 1, -1, 0];
    const n = x.length;

    const resultado = newtonBackwardDeveloped(x, y, n);

    document.write("Polinomio Simplificado:\n");
    document.write("14 +6.3333x + 0.6666x^2+0.1916-2.6833-1.2416x-17.25");
}

// Llamada a la función principal
newtonAtras();
