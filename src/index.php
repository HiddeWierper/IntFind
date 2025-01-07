<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$to = "hmrwierper@gmail.com";        // Ontvanger e-mailadres
$subject = "Test e-mail van PHP";     // Onderwerp van de e-mail
$message = "Hallo, dit is een testbericht verzonden via PHP."; // Inhoud van de e-mail
$headers = "From: hmrwierper@gmail.com"; // Afzender e-mailadres

// Verstuur de e-mail
if (mail($to, $subject, $message, $headers)) {
    echo "E-mail succesvol verzonden naar $to.";
} else {
    echo "Er is een fout opgetreden bij het verzenden van de e-mail.";
}


?>
