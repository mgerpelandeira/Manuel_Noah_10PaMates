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
        respuesta = "¡Hola! 😊 Puedo ayudarte con límites, derivadas, integrales y matrices.";
    }

    // LÍMITES
    else if (mensaje.includes("limite")) {
        respuesta = "Un límite es el valor al que se acerca una función cuando x se aproxima a un número.";
    }

    // DERIVADAS
    else if (mensaje.includes("derivada")) {
        respuesta = "La derivada mide cómo cambia una función. Ejemplo: la derivada de x² es 2x.";
    }

    // INTEGRALES
    else if (mensaje.includes("integral")) {
        respuesta = "La integral es el proceso inverso de derivar y sirve para calcular áreas.";
    }

    // MATRICES
    else if (mensaje.includes("matriz")) {
        respuesta = "Una matriz es una tabla de números organizada en filas y columnas.";
    }

    // ÁREAS
    else if (mensaje.includes("area")) {
        respuesta = "El área bajo una curva se calcula usando integrales definidas.";
    }

    // EJEMPLOS
    else if (mensaje.includes("ejemplo")) {
        respuesta = "Ejemplo: derivada de x² es 2x, integral de 2x es x².";
    }

    // OPERACIONES SIMPLES
    else if (!isNaN(eval(mensaje))) {
        try {
            let resultado = eval(mensaje);
            respuesta = "El resultado es: " + resultado;
        } catch {
            respuesta = "No puedo calcular eso.";
        }
    }

    // AYUDA
    else if (mensaje.includes("ayuda")) {
        respuesta = "Puedes preguntarme sobre límites, derivadas, integrales, matrices o hacer operaciones como 2+2.";
    }

    // RESPUESTA POR DEFECTO
    else {
        respuesta = "No entiendo 😅. Prueba con: '¿qué es una derivada?' o '2+2'";
    }

    chat.innerHTML += "<p><b>Bot:</b> " + respuesta + "</p>";

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}
