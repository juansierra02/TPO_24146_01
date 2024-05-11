document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('form_reservas');

    // Verificar si el formulario existe en esta página
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario
            if (validarFormulario()) {
                enviarFormulario();
            }
        });
    }

    function validarFormulario() {
        if (!form) {
            return false; // No hay formulario, por lo tanto, no puede ser válido
        }

        var name = form.querySelector('input[name="your-name"]').value.trim();
        var email = form.querySelector('input[name="your-email"]').value.trim();
        var subject = form.querySelector('input[name="your-subject"]').value.trim();
        var message = form.querySelector('textarea[name="your-message"]').value.trim();

        // Verificar que los campos requeridos no estén vacíos
        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Por favor, complete todos los campos.');
            return false;
        }

        // Validar el formato del correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return false;
        }
        return true; // El formulario es válido
    }

});


function enviarFormulario() {
    Swal.fire({
        title: "¡Reserva exitosa!",
        text: "Gracias por elegirnos para tu reserva. ¡Esperamos verte pronto!",
        icon: "success",
        willClose: () => {
            window.location.href = "../index.html";
        }
    });
}