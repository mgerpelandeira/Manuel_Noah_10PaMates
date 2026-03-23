function comprobarRespuesta(correcto) {
    let resultado = document.getElementById("resultado");

    if (correcto) {
        resultado.innerHTML = "✅ Correcto";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Incorrecto";
        resultado.style.color = "red";
    }
}
