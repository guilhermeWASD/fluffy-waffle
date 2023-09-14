<?php

$user = 'root';
$password = '';
$database = 'site-login';
$host = 'localhost';

$mysqli = new mysqli($host, $user, $password, $database)

if($mysqli->error){
    die("Falha ao conectar o db" . $mysqli->error);
}
?>