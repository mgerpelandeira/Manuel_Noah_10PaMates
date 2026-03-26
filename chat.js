function abrirChat() {
    document.getElementById("chatbox").style.display = "block";
}

function cerrarChat() {
    document.getElementById("chatbox").style.display = "none";
}

function enviarMensaje() {
    let input = document.getElementById("chat-input");
    let mensaje = input.value;
    let chat = document.getElementById("chat-mensajes");

    chat.innerHTML += "<p><b>Tú:</b> " + mensaje + "</p>";

    let respuesta = "";

    if (mensaje.toLowerCase().includes("limite")) {
        respuesta = "Un límite es el valor al que se acerca una función.";
    } 
    else if (mensaje.toLowerCase().includes("derivada")) {
        respuesta = "La derivada mide el cambio de una función.";
    } 
    else if (mensaje.toLowerCase().includes("integral")) {
        respuesta = "La integral sirve para calcular áreas.";
    } 
    else {
        respuesta = "Pregunta sobre límites, derivadas o integrales 😊";
    }

    chat.innerHTML += "<p><b>Bot:</b> " + respuesta + "</p>";

    input.value = "";
}
