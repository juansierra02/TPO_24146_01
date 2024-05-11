<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // Evitar el envío del formulario
    event.preventDefault();

    // Validar los campos del formulario
    var name = form.querySelector('input[name="your-name"]').value.trim();
    var email = form.querySelector('input[name="your-email"]').value.trim();
    var subject = form.querySelector('input[name="your-subject"]').value.trim();
    var message = form
      .querySelector('textarea[name="your-message"]')
      .value.trim();

    // Verificar que los campos requeridos no estén vacíos
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Simplemente cargar el index.html y mostrar un mensaje
    enviarFormulario();
  });

  function enviarFormulario() {
    // Aquí puedes realizar cualquier operación adicional antes de cargar el index.html
    // Por ejemplo, puedes enviar datos del formulario al servidor mediante AJAX

    // Cargar el index.html
    window.location.href = "/index.html";

    // Mostrar un mensaje
    alert("El mensaje ha sido enviado");
  }
});
=======
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
            window.location.href = "/index.html";
        }
    });
}
>>>>>>> fc0c50af245317eb12f8e681d8bea47c5b3817d3
