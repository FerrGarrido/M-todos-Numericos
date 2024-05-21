function guardarValor() 
{
    // Obtener el valor del input
    var valor = document.getElementById("valor_inicialInput").value;
    
    // Convertir el valor a flotante
    var valorFlotante = parseFloat(valor);
    
    // Hacer lo que quieras con el valor flotante
    // Por ejemplo, mostrarlo en la consola
    console.log("El valor flotante guardado es: " + valorFlotante);
    document.getElementById("valorGuardado").innerText = "Xo= " + valorFlotante;
    document.getElementById("valorGuardado2").innerText = "Xo= " + valorFlotante;
}
function calcularRaizNR() {
    guardarValor();
  
    let x0 = parseFloat(document.getElementById("valor_inicialInput").value);
    let max_iterations = parseInt(document.getElementById("max_iterationsInput").value);
    const tol = 1e-5; // Tolerancia
  
    console.log("\nIteraciones del método de Newton-Raphson:");
    let root = newtonRaphson(x0, max_iterations);
  
    console.log("\nLa raíz aproximada es: " + root.toFixed(4));
  
    let iteracionActual = 1; // Inicializa la iteración actual
    let tablaHTML = ""; // Inicializa el HTML de la tabla
  
    while (iteracionActual <= max_iterations) {
        // Inicia una nueva tabla
        tablaHTML += "<table><tr><th>Iteración</th><th></th></tr>";
        
        // Genera las iteraciones para esta tabla
        for (let i = 0; i < 10 && iteracionActual <= max_iterations; i++) {
            const raiz = newtonRaphson(x0, tol);
            tablaHTML += `<tr><td>${iteracionActual}</td><td>${raiz.toFixed(4)}</td></tr>`;
            x0 = raiz; // Actualiza el punto inicial para la próxima iteración
            iteracionActual++; // Incrementa la iteración actual
        }
        
        // Cierra la tabla actual
        tablaHTML += "</table>";
    }
  
    // Actualiza el contenido del elemento con id "resultadonr" con todas las tablas HTML generadas
    document.getElementById("resultadonr").innerHTML = tablaHTML;
}



  



// Definición de la función y su derivada
function f(x) {
    return x*x*x - 2*x + 1;
}

function f_prime(x) {
    return 3*x*x - 2;
}

// Método de Newton-Raphson
function newtonRaphson(x0, max_iterations) 
{
    let x = x0;
    let x_next = x0;

    for (let i = 0; i < max_iterations; i++) 
    {
        let fx = f(x);
        let fpx = f_prime(x);

        if (Math.abs(fpx) < EPSILON) 
        {
            console.log("La derivada se ha vuelto demasiado pequeña, salida del bucle.");
            break;
        }

        x_next = x - (fx / fpx);

        // Comprobar si estamos cerca de una raíz repetida
        if (Math.abs(x_next - x) < EPSILON) 
        {
            console.log("Se alcanzó la convergencia hacia la raíz.");
            break;
        }
        
        console.log("Iteración " + (i + 1) + ": x = " + x_next.toFixed(8));
        x = x_next;
    }

    return x_next;
}

const EPSILON = 0.0001;

