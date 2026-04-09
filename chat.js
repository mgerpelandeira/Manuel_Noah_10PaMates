function abrirChat() {
    document.getElementById("chatbox").style.display = "block";
}

function cerrarChat() {
    document.getElementById("chatbox").style.display = "none";
}

function enviarMensaje() {
    let input = document.getElementById("chat-input");
    let mensaje = input.value.toLowerCase();
    let chat = document.getElementById("chat-mensajes");

    if (mensaje === "") return;

    chat.innerHTML += "<p><b>Tú:</b> " + mensaje + "</p>";

    let respuesta = "";

    // SALUDOS
    if (mensaje.includes("hola") || mensaje.includes("buenas")) {
        respuesta = "¡Hola! 👋 Soy tu asistente de matemáticas. Pregúntame lo que quieras.";
    }

    // AYUDA
    else if (mensaje.includes("ayuda")) {
        respuesta = "Puedes preguntarme sobre: límites, derivadas, integrales, áreas, matrices o hacer cálculos como 2+2.";
    }

    // LÍMITES
    else if (mensaje.includes("limite")) {
        respuesta = "Un límite es el valor al que se acerca una función. Para calcularlo, sustituye el valor en la función.";
    }

    // DERIVADAS
    else if (mensaje.includes("derivada")) {
        respuesta = "La derivada mide el cambio. Regla básica: xⁿ → n·xⁿ⁻¹.";
    }

    // INTEGRALES
    else if (mensaje.includes("integral")) {
        respuesta = "La integral es el proceso inverso de derivar. Sirve para calcular áreas.";
    }

    // ÁREAS
    else if (mensaje.includes("area")) {
        respuesta = "El área bajo una curva se calcula con integrales definidas: F(b) - F(a).";
    }

    // MATRICES
    else if (mensaje.includes("matriz")) {
        respuesta = "Una matriz es una tabla de números. Puedes sumar o multiplicar matrices.";
    }

    // EJEMPLOS
    else if (mensaje.includes("ejemplo")) {
        respuesta = "Ejemplo: derivada de x² = 2x, integral de 2x = x².";
    }

    // EXPLICAR PASO A PASO
    else if (mensaje.includes("paso")) {
        respuesta = "Paso a paso: identifica la operación → aplica la fórmula → simplifica el resultado.";
    }

    // CALCULADORA
    else if (/^[0-9+\-*/(). ]+$/.test(mensaje)) {
        try {
            let resultado = eval(mensaje);
            respuesta = "Resultado: " + resultado;
        } catch {
            respuesta = "Operación no válida.";
        }
    }

    // RESPUESTA INTELIGENTE GENERAL
    else if (mensaje.includes("que es")) {
        respuesta = "Eso es un concepto matemático. Intenta especificar: límites, derivadas, integrales o matrices.";
    }

    // DEFAULT
    else {
        respuesta = "No entiendo 😅. Prueba con: 'derivada de x²', 'qué es un límite' o '2+2'.";
    }

    chat.innerHTML += "<p><b>Bot:</b> " + respuesta + "</p>";

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

// ENTER FUNCIONA
window.onload = function() {
    document.getElementById("chat-input").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            enviarMensaje();
        }
    });
};
