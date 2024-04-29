// Función para crear y mostrar la modal con un mensaje personalizado
function mostrarModal(mensaje) {
    // Crear el HTML de la modal con el mensaje personalizado
    var modalHTML = `
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2 class="modal-title">Título de la Modal</h2>
                </div>
                <div class="modal-body">
                    <p>${mensaje}</p>
                </div>
                <div class="modal-footer">
                    <button id="btnCancelar" class="btn btn-cancelar">Cancelar</button>
                    <button id="btnAceptar" class="btn btn-aceptar">Aceptar</button>
                </div>
            </div>
        </div>
    `;

    // Insertar el HTML de la modal al final del body
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Obtener la modal recién creada
    var modal = document.getElementById("myModal");

    // Obtener el botón de cerrar
    var spanCerrar = modal.querySelector(".close");

    // Función para cerrar la modal
    function cerrarModal() {
        modal.style.display = "none";
    }

    // Event listener para cerrar la modal cuando se hace clic en el botón de cerrar en el header
    spanCerrar.addEventListener("click", cerrarModal);

    // Event listener para cerrar la modal cuando se hace clic fuera de ella
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            cerrarModal();
        }
    });

    // Event listener para cerrar la modal cuando se presiona la tecla Esc
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            cerrarModal();
        }
    });

    // Obtener los botones de cancelar y aceptar
    var btnCancelar = document.getElementById("btnCancelar");
    var btnAceptar = document.getElementById("btnAceptar");

    // Event listener para el botón de cancelar
    btnCancelar.addEventListener("click", function() {
        cerrarModal();
        // Aquí puedes añadir acciones adicionales si lo deseas
    });

    // Event listener para el botón de aceptar
    btnAceptar.addEventListener("click", function() {
        // Aquí puedes añadir acciones cuando se hace clic en el botón de aceptar
        alert("Aceptar clicado");
    });

    // Mostrar la modal
    modal.style.display = "block";
}

// Obtener el botón de abrir modal
var btnAbrir = document.getElementById("openModalBtn");

// Event listener para abrir la modal cuando se hace clic en el botón
btnAbrir.addEventListener("click", function() {
    // Pasar el mensaje personalizado a la función mostrarModal
    mostrarModal("Este es un mensaje personalizado para la modal.");
});