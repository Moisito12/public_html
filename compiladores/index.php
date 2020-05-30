<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Compiladores</title>
</head>

<body>
    <?php

    if (!empty($_POST)) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
        $uploadOk = 1;
        $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);
        // Check if image file is a actual image or fake image
        /*if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image. 100";
        $uploadOk = 0;
    }
}*/
        // Check if file already exists
        if (file_exists($target_file)) {
            echo "Lo siento, el archivo ya existe.";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["fileToUpload"]["size"] > 500000) {
            echo "Lo siento, su archivo es muy grande.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if ($imageFileType != "txt" && $imageFileType != "java") {
            echo "Lo siento, solo se aceptan archivos txt & java.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Lo siento, tu archivo no se puede cargar.";
            // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                echo "The file " . basename($_FILES["fileToUpload"]["name"]) . " has been uploaded.";
            } else {
                echo "Lo siento,hubo un error al cargar el archivo.";
            }
        }
    }
    ?>
    <h1>Moisés Rentería</h1>
    <h2>Compiladores</h2>
    <table>
        <tr>
            <td>Archivo Fuente</td>
            <td>Análisis Léxico</td>
            <td>Tokens</td>
        </tr>
        <tr>
            <td><textarea name="" style="resize:none" id="" cols="40" rows="15">
            <?php
            if (!empty($target_file) && file_exists($target_file)) {
                $fileContent = file_get_contents($target_file);
                echo $fileContent;
                unlink($target_file);
            }
            ?></textarea></td>
            <td><textarea name="" style="resize:none" id="" cols="40" rows="15"></textarea></td>
            <td><textarea name="" style="resize:none" id="" cols="40" rows="15"></textarea></td>
        </tr>
    </table>
    <a href="https://warm-mesa-59344.herokuapp.com/compiladores/index.php" class="btn btn-primary btn-sm">Ver en Heroku</a>
    <a href="https://moisesrenteriacompilador.000webhostapp.com/compiladores/index.php" class="btn btn-danger btn-sm">Ver en 000Webhost</a>
    <form action="index.php" method="post" enctype="multipart/form-data">
        Select image to upload:
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" value="Subir Archivo" name="submit" class="btn btn-sm btn-success">
    </form>
</body>

</html>