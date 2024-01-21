// Solicitar al usuario que introduzca un número
var numero = prompt("Introduce un número para ver su tabla de multiplicar:");

// Convertir la entrada a un número entero
numero = parseInt(numero);

// Verificar si la entrada es un número válido
if (isNaN(numero)) {
    alert("Por favor, introduce un número válido.");
} else {
    // Crear la tabla de multiplicar del número introducido
    document.write("<h2>Tabla de multiplicar del " + numero + "</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Multiplicador</th><th>Resultado</th></tr>");

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        document.write("<tr><td>" + numero + " x " + i + "</td><td>" + resultado + "</td></tr>");
    }

    document.write("</table>");
}