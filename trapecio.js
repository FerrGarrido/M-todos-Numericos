// Función para calcular el valor de f(x)
function funcion(x) {
    // Aquí se pueden colocar los valores de f(x) dados
    if (x === 1)
        return 1.000;
    else if (x === 2)
        return 0.500;
    else if (x === 3)
        return 0.333;
    else if (x === 4)
        return 0.250;
    else if (x === 5)
        return 0.200;
    else
        return 0; // Si x no coincide con ninguno de los valores dados
}

// Función para aplicar el método del trapecio
function metodoTrapecio(a, b) {
    let h = (b - a) / 4; // Dividimos el intervalo en 4 partes iguales
    let x0 = a;
    let x1 = a + h;
    let x2 = a + 2 * h;
    let x3 = a + 3 * h;
    let x4 = b;
    
    // Crear la tabla HTML
    let tabla = "<table><tr><th>x</th><th>f(x)</th></tr>";
    tabla += `<tr><td>${x0.toFixed(3)}</td><td>${funcion(x0).toFixed(3)}</td></tr>`;
    tabla += `<tr><td>${x1.toFixed(3)}</td><td>${funcion(x1).toFixed(3)}</td></tr>`;
    tabla += `<tr><td>${x2.toFixed(3)}</td><td>${funcion(x2).toFixed(3)}</td></tr>`;
    tabla += `<tr><td>${x3.toFixed(3)}</td><td>${funcion(x3).toFixed(3)}</td></tr>`;
    tabla += `<tr><td>${x4.toFixed(3)}</td><td>${funcion(x4).toFixed(3)}</td></tr></table>`;
    
    // Obtener la suma de los términos de la integral aproximada según la fórmula del método del trapecio
    let resultado = (h / 2) * (funcion(x0) + 2 * funcion(x1) + 2 * funcion(x2) + 2 * funcion(x3) + funcion(x4));
    
    // Imprimir el desarrollo
    let desarrollo = `Resultado = (${h.toFixed(3)} / 2) * (${funcion(x0).toFixed(3)} + 2 * ${funcion(x1).toFixed(3)} + 2 * ${funcion(x2).toFixed(3)} + 2 * ${funcion(x3).toFixed(3)} + ${funcion(x4).toFixed(3)})`;
    
    return {resultado, tabla, desarrollo};
}

// Función para llamar al método del trapecio y crear la tabla HTML
function calcularTrapecio() {
    let a = 1; // Límite inferior de integración
    let b = 5; // Límite superior de integración
    let {resultado, tabla, desarrollo} = metodoTrapecio(a, b);
    document.getElementById("tablatrapecio").innerHTML = tabla;
    document.getElementById("resultadoIntegral").innerHTML = "El resultado de la integral aproximada es: " + resultado.toFixed(3);
    document.getElementById("desarrolloIntegral").innerHTML = "Desarrollo:<br>" + desarrollo;
}

