let puntuacion = 0;
let preguntasRespondidas = 0;

function responder(correcta) {
    preguntasRespondidas++;

    if (correcta) {
        puntuacion++;
        alert("✅ Correcto");
    } else {
        alert("❌ Incorrecto");
    }

    // Si ya respondió las 10
    if (preguntasRespondidas === 10) {
        mostrarNota();
    }
}

function mostrarNota() {
    let nota = (puntuacion / 10) * 10;

    let mensaje = "";

    if (nota >= 9) {
        mensaje = "🔥 Sobresaliente";
    } else if (nota >= 7) {
        mensaje = "👏 Notable";
    } else if (nota >= 5) {
        mensaje = "👍 Aprobado";
    } else {
        mensaje = "❌ Suspenso";
    }

    document.getElementById("resultado").innerHTML =
        "Puntuación: " + puntuacion + "/10<br>Nota: " + nota + " - " + mensaje;
}
