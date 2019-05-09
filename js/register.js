$(document).ready(function () {
    // La función que se ejecuta una vez que se sube el formulario de registro de usuario
    $('form').submit(function (e) {
        e.preventDefault();
        // Estructura que verifica si las dos contraseñas coinciden y alertan si es correcto o si es incorrecto
        if (verifyPassword()) {
            // Llama a la función registerUser para trabajar el registro de usuario
            registerUser($('[name="userName"]').val(), $('[name="userPassword"]').val());
        }
        else {
            // Hace aparecer el div que alerta un registro incorrecto
            slideAlert("#registerFailed");
        }
    });
});