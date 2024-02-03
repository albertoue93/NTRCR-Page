<?php
// Recibir datos del formulario
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

// Dirección de correo electrónico donde se enviará el mensaje
$emailSend = 'albertoue93@gmail.com'; // Reemplaza esto con tu dirección de correo electrónico

// Asunto del correo electrónico
$subject = 'Mensaje de contacto desde tu sitio web';

// Construir el cuerpo del mensaje
$content = "Name: $name\n";
$content .= "Email: $email\n";
$content .= "Message:\n$message\n";

// Cabeceras del correo electrónico
$header = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Enviar el correo electrónico
mail($emailSend, $subject, $content, $header);

// Redireccionar de vuelta al formulario
header('Location: contact.html'); // Reemplaza "formulario.html" con la página a la que quieres redirigir después de enviar el formulario
?>
