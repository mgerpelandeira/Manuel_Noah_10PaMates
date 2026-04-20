// ================= EXAMEN =================

let puntuacion = 0;
let preguntasRespondidas = 0;

function responder(correcta, boton) {

    let botones = boton.parentElement.querySelectorAll("button");
    botones.forEach(b => b.disabled = true);

    preguntasRespondidas++;

    if (correcta) {
        puntuacion++;
        boton.style.background = "green";
    } else {
        boton.style.background = "red";
    }

    if (preguntasRespondidas === 10) {
        mostrarNota();
    }
}

function mostrarNota() {
    let nota = (puntuacion / 10) * 10;

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>" +
        "Aciertos: " + puntuacion + "/10<br>" +
        "Nota: " + nota;
}


// ================= CHATBOT =================

// Espera a que cargue la página
document.addEventListener("DOMContentLoaded", function () {

    window.abrirChat = function () {
        document.getElementById("chatbox").style.display = "block";
    };

    window.cerrarChat = function () {
        document.getElementById("chatbox").style.display = "none";
    };

    window.enviarMensaje = function () {

        let input = document.getElementById("chat-input");
        let mensaje = input.value.trim().toLowerCase();

        if (mensaje === "") return;

        let chat = document.getElementById("chat-mensajes");

        // MENSAJE USUARIO
        let user = document.createElement("div");
        user.className = "usuario";
        user.textContent = mensaje;
        chat.appendChild(user);

        // RESPUESTA BOT
        let bot = document.createElement("div");
        bot.className = "bot";

        if (mensaje.includes("limite")) {
            bot.textContent = "Un límite indica a qué valor se acerca una función.";
        }
        else if (mensaje.includes("derivada")) {
            bot.textContent = "La derivada mide cómo cambia una función.";
        }
        else if (mensaje.includes("integral")) {
            bot.textContent = "La integral calcula áreas bajo la curva.";
        }
        else if (mensaje.includes("hola")) {
            bot.textContent = "Hola 👋 soy tu asistente de matemáticas.";
        }
        else {
            bot.textContent = "Prueba con: límite, derivada o integral.";
        }

        chat.appendChild(bot);

        input.value = "";
        chat.scrollTop = chat.scrollHeight;
    };

});
