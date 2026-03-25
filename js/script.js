// ================= TOTAL INICIAL =================

// Obtener total guardado o iniciar en 0
let total = localStorage.getItem("totalDonaciones") || 0;

// Mostrar total al cargar la página
document.getElementById("total").innerText =
    "Total recaudado: $" + total;


// ================= SELECCIONAR MONTO =================

// Función para los botones de monto
function seleccionarMonto(valor) {
    document.getElementById("monto").value = valor;
}


// ================= FORMULARIO =================

document.getElementById("formDonacion").addEventListener("submit", function (e) {
    e.preventDefault();

    let monto = parseInt(document.getElementById("monto").value);
    // Validar monto
    if (!monto || monto <= 0) {
    alert("Ingresa un monto válido");
    return;
}
    let nombre = document.getElementById("nombre").value;

    // Validación básica
    if (!monto || !nombre) {
        alert("Por favor completa los datos");
        return;
    }

    function formatearMonto(valor){
    return valor.toLocaleString("es-CO");
    }

    document.getElementById("total").innerText =
    "Total recaudado: $" + formatearMonto(total);

    // Sumar al total
    total = parseInt(total) + monto;

    // Guardar en localStorage
    localStorage.setItem("totalDonaciones", total);

    // Actualizar total en pantalla
    document.getElementById("total").innerText =
        "Total recaudado: $" + total;

    // ================= MOSTRAR MODAL =================

    document.getElementById("modal").style.display = "flex";

    
    // Limpiar formulario
    document.getElementById("formDonacion").reset();
});


// ================= CERRAR MODAL =================

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}