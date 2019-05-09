function enviarInfoLogin() {
    // Creamos el objeto que enviaremos por AJAX
    var obj = new Object;
    obj.user = $('[name="userName"]').val();
    obj.password = $('[name="userPassword"]').val();

    // Enviamos este objeto por un $.post
    $.post(
        "php/procesarLogin.php", // Dirección
        obj,                     // Contenido 
        function (data) {        // Función callback
            alert(data);
        }
    );
    console.log(obj);
}

function verifyPassword() {
    return ($('[name="userPassword"]').val() == $('[name="userPasswordConfirm"]').val());
}

function slideAlert(alertDiv) {
    // Hace aparecer un div que la función recibe con el método slideDown y luego lo hace desaparecer con slideUp
    $(alertDiv).slideDown(400);
    setTimeout(
        function () {
            $(alertDiv).slideUp(400);
        },
        4000
    );
}

function registerUser(user, password) {
    // Creamos un registro con los datos de usuario y contraseña
    obj = new Object;
    obj.user = user;
    obj.password = password;

    // Enviamos por $.post el obj a un script de php que lo maneje
    $.post(
        "php/procesarRegister.php",
        obj,
        function (data) {
            slideAlert("#registerCorrect");
        }
    );
}
