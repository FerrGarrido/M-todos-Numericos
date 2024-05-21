// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    else
        return n * factorial(n - 1);
}

// Función para calcular las diferencias divididas
function diferenciasDivididas(x, y, n, k) {
    if (k === 0)
        return y[0];
    else
        return (diferenciasDivididas(x.slice(1), y.slice(1), n - 1, k - 1) - diferenciasDivididas(x, y, n - 1, k - 1)) / (x[k] - x[0]);
}

// Función para calcular el polinomio de Newton hacia adelante y mostrarlo desarrollado
function newtonForwardDeveloped(x, y, n) {
    let polinomio = "El polinomio de Newton hacia adelante desarrollado es:<br>";

    for (let i = 0; i < n; i++) {
        let coeficiente = diferenciasDivididas(x, y, n, i);
        if (i > 0) {
            polinomio += " + ";
        }
        polinomio += coeficiente.toFixed(4);
        for (let j = 0; j < i; j++) {
            polinomio += "*(x - " + x[j].toFixed(2) + ")";
        }
    }
    return polinomio;
}

// Función principal
function newtondelante() {
    const x = [1, 3, 5, 6];
    const y = [2.0/3, 1, -1, 0];
    const n = x.length;

    const resultado = newtonForwardDeveloped(x, y, n);
    document.getElementById("outputdelante").innerHTML = resultado;
    document.write("Polinomio Simplificado:\n");
    document.write("0.1916x^3 - 2.0166x^2 + 5.7416x - 3.2500");
}

// Llamada a la función principal
newtondelante();
