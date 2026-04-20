let puntuacion = 0;
let respondidas = 0;

function responder(correcta, btn) {

    let botones = btn.parentElement.querySelectorAll("button");
    botones.forEach(b => b.disabled = true);

    respondidas++;

    if (correcta) {
        puntuacion++;
        btn.style.background = "green";
    } else {
        btn.style.background = "red";
    }

    if (respondidas === 10) {
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


// ================= CHAT =================

document.addEventListener("DOMContentLoaded", () => {

window.abrirChat = function () {
    document.getElementById("chatbox").style.display = "block";
};

window.cerrarChat = function () {
    document.getElementById("chatbox").style.display = "none";
};

window.enviarMensaje = function () {

    let input = document.getElementById("chat-input");
    let texto = input.value.toLowerCase().trim();

    if (texto === "") return;

    let chat = document.getElementById("chat-mensajes");

    let user = document.createElement("div");
    user.className = "usuario";
    user.textContent = texto;
    chat.appendChild(user);

    let bot = document.createElement("div");
    bot.className = "bot";

    if (texto.includes("limite")) bot.textContent = "Un límite estudia a qué valor se acerca una función.";
    else if (texto.includes("derivada")) bot.textContent = "La derivada mide el cambio de una función.";
    else if (texto.includes("integral")) bot.textContent = "La integral calcula áreas bajo curvas.";
    else bot.textContent = "Pregunta sobre: límite, derivada o integral.";

    chat.appendChild(bot);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
};

});
