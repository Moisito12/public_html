<?php
$target_dir = "/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

echo  $target_file;
$myfile = fopen($target_file, "r") or die("Unable to open file!");
echo fread($myfile,filesize($target_file));
fclose($myfile);