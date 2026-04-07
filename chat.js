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

    if (mensaje.includes("hola")) {
        respuesta = "¡Hola! 😊 Pregúntame sobre matemáticas.";
    }
    else if (mensaje.includes("limite")) {
        respuesta = "Un límite es el valor al que se acerca una función.";
    }
    else if (mensaje.includes("derivada")) {
        respuesta = "La derivada mide el cambio de una función. Ej: x² → 2x";
    }
    else if (mensaje.includes("integral")) {
        respuesta = "La integral sirve para calcular áreas.";
    }
    else if (mensaje.includes("matriz")) {
        respuesta = "Una matriz es un conjunto de números en filas y columnas.";
    }
    else if (/^[0-9+\-*/(). ]+$/.test(mensaje)) {
        try {
            let resultado = eval(mensaje);
            respuesta = "Resultado: " + resultado;
        } catch {
            respuesta = "Operación no válida";
        }
    }
    else {
        respuesta = "No entiendo 😅 prueba con límites, derivadas o 2+2";
    }

    chat.innerHTML += "<p><b>Bot:</b> " + respuesta + "</p>";

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

/* ENTER FUNCIONA */
window.onload = function() {
    document.getElementById("chat-input").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            enviarMensaje();
        }
    });
};
