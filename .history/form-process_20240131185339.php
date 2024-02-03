<?php
// Verificar si se han enviado datos desde el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Dirección de correo electrónico donde se enviará el mensaje
    $destinatario = 'albertoue93@gmail.com'; // Reemplaza esto con tu dirección de correo electrónico

    // Asunto del correo electrónico
    $asunto = 'Mensaje de contacto desde tu sitio web';

    // Construir el cuerpo del mensaje
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $email\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Cabeceras del correo electrónico
    $cabeceras = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Enviar el correo electrónico
    mail($destinatario, $asunto, $contenido, $cabeceras);

    // Redireccionar de vuelta al formulario
    header('Location: formulario.html'); // Reemplaza "formulario.html" con la página a la que quieres redirigir después de enviar el formulario
} else {
    // Si no se ha enviado por el formulario, redirigir a la página de inicio o mostrar un mensaje de error
    header('Location: index.html'); // Reemplaza "index.html" con la página a la que quieres redirigir si no se envió el formulario
}
?>
