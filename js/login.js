$(document).ready(function () {
    // Cuando se sube el formulario de inicio de sesión
    $('form').submit(function (e) { 
        e.preventDefault();
        enviarInfoLogin();
    });
});