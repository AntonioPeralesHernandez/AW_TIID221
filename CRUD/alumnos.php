
<?php

// Incluir la información del archivo conexion.php
include("conexion.php");

// Mandamos a llamar la función conectar
$con = conectar();

// Consultar todos los alumnos
$sql = "SELECT * FROM alumnos";

// Ejecutar la consulta
$query = mysqli_query($con, $sql);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumnos</title>
</head>
<body>

    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Matrícula</th>
                <th>Nombre</th>
                <th>Apellido paterno</th>
                <th>Apellido materno</th>
                <th>Edad</th>
                <th>Acciones</th>
            </tr>
        </thead>

        <tbody>
            <?php
            while($row = mysqli_fetch_array($query)){
            ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['matricula']; ?></td>
                <td><?php echo $row['nombre']; ?></td>
                <td><?php echo $row['apellido_p']; ?></td>
                <td><?php echo $row['apellido_m']; ?></td>
                <td><?php echo $row['edad']; ?></td>
                <td>
                 <a href="delete.php?id=<?php echo $row['id']; ?>">Eliminar</a>
                  <br>
                  <a href="editar.php?id=<?php echo $row['id']; ?>">Editar</a>
                </td>
            </tr>
            <?php
            }
            ?>
        </tbody>
    </table>

    <h1>Formulario</h1>
    <form action="insertar.php" method="POST">
        <input type="text" class="form-control" name="matricula" placeholder="Matrícula">
        <input type="text" class="form-control" name="nombre" placeholder="Nombre">
        <input type="text" class="form-control" name="apellido_p" placeholder="Apellido paterno">
        <input type="text" class="form-control" name="apellido_m" placeholder="Apellido materno">
        <input type="text" class="form-control" name="edad" placeholder="Edad">
        <button type="submit">Agregar</button>
    </form>
</body>
</html>
