<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

$name = "Guilherme";
echo "<h1>Good Morning, $name!</h1>";

echo "Today is: "; 
echo date('l jS \of F Y');

echo nl2br("\nHour: ");
echo date('h:i:s A');

echo "<br></br>";

echo nl2br("\n hello \nworld\n");
var_dump("MESA");

echo "<br></br>";
echo "CONEXÃO BANCO DE DADOS";

$conexao = mysqli_connect("localhost", "root", "", "aluguel_carros2", 3305);

?>

</body>
</html>