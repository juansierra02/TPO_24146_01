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
