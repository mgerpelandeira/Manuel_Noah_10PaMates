function comprobarRespuesta(correcto) {
    let resultado = document.getElementById("resultado");

    if (correcto) {
        resultado.innerHTML = "✅ Correcto";
    } else {
        resultado.innerHTML = "❌ Incorrecto";
    }
}
