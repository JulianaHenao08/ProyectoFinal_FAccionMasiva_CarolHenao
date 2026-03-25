// Evento del formulario
document.getElementById("formVoluntario").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombreVol").value;

    // Mostrar modal
    document.getElementById("modalVol").style.display = "flex";

    // Mensaje personalizado
    document.getElementById("mensajeVolModal").innerHTML =
    "💛 Gracias " + nombre + " por unirte como voluntario, pronto nos estaremos comunicando contigo.";

    // Limpiar formulario
    this.reset();
});

// Función para cerrar modal
function cerrarModalVol(){
    document.getElementById("modalVol").style.display = "none";
}