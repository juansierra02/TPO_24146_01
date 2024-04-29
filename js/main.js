document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');

    // Verificar si el formulario existe en esta página
    //if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar el envío del formulario
            if (validarFormulario()) {
                enviarFormulario();
            }
        });
    //}
});

function validarFormulario() {
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

function enviarFormulario() {
    // Aquí puedes realizar cualquier operación adicional antes de cargar el index.html
    // Por ejemplo, puedes enviar datos del formulario al servidor mediante AJAX

    // Cargar el index.html
    window.location.href = '/index.html';

    // Mostrar un mensaje
    mostrarModal("El mensaje ha sido enviado.");
    //alert('El mensaje ha sido enviado');
}