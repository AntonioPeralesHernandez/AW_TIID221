
<?php
include("conexion.php");

$con = conectar();

// Recibimos la matrícula enviada por la URL
$id = $_GET['id'];

// Eliminamos al alumno de la tabla
$sql = "DELETE FROM alumnos WHERE id='$id'";

$query = mysqli_query($con, $sql);

// Verificamos si la consulta se ejecutó correctamente
if ($query) {
    header("Location: alumnos.php");
    exit();
} else {
    echo "Error al eliminar al alumno: " . mysqli_error($con);
}
?>
