
<?php
//Creamos una función llamada conectar
function conectar() {
    // Información del servidor
    $host = "localhost";
    $user = "root";
    $pass = "";

    // Base de datos
    $db = "aw221";

    // Creamos la conexión
    $con = mysqli_connect($host, $user, $pass, $db);

    return $con;
}
?>
