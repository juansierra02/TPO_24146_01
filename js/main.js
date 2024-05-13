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

        var campos = ['your-name', 'your-email', 'your-subject', 'your-message'];
        var mensajes = ['Nombre', 'Correo Electrónico', 'Asunto', 'Mensaje'];

        for (var i = 0; i < campos.length; i++) {
            var valor = form.querySelector('input[name="' + campos[i] + '"], textarea[name="' + campos[i] + '"]').value.trim();
            if (valor === '') {
                Swal.fire({
                    icon: "error",
                    title: "Por favor",
                    html:'complete el campo <strong>' + mensajes[i] + '</strong>.!',
                    confirmButtonColor: "#d63030",
                });
                return false;
            }
        }

        // Validar el formato del correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Por favor",
                html:'ingrese un <strong>correo electrónico válido</strong>.',
                confirmButtonColor: "#d63030",
            });
            //alert('Por favor, ingrese un correo electrónico válido.');
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
        confirmButtonColor: "#3085d6",
        willClose: () => {
            window.location.href = "../index.html";
        }
    });
}


function login() {
    Swal.fire({
        imageUrl: "../static/img/banner.png", 
        title: 'Iniciar sesión',
        html:
            '<input id="swal-input1" class="swal2-input" placeholder="Usuario">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Contraseña" type="password"><br>'+
            '<a href="#"><b>Olvido su contraseña?</b></a>',

        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: 'Iniciar sesión',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,

        preConfirm: () => {
            const usuario = Swal.getPopup().querySelector('#swal-input1').value;
            const contraseña = Swal.getPopup().querySelector('#swal-input2').value;

            return validarCredenciales(usuario, contraseña);
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.value.success) {
            Swal.fire({
                imageUrl: "../static/img/banner.png",
                title: `¡Hola ${result.value.usuario}!`,
                //icon: 'success',
                confirmButtonColor: "#3085d6",
                text: 'Inicio de sesión exitoso'
            });
        } else {
            Swal.fire({
                imageUrl: "../static/img/banner.png",
                title: 'Error',
                //icon: 'error',
                confirmButtonColor: "#d63030",
                text: 'Credenciales incorrectas'
            });
        }
    });
}

function validarCredenciales(usuario, contraseña) {
    // Hardcodeamos el usuario y la contraseña
    if (usuario === 'usuario' && contraseña === 'contraseña') {
        return Promise.resolve({ success: true, usuario: usuario });
    } else {
        return Promise.resolve({ success: false });
    }
}
