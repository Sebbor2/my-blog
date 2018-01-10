<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost","seb","rXlr98@6","bordeu_blog","3306");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM `blog_article` WHERE 1";

if ($conn->query($sql) === TRUE) {
    echo "Chargement OK";
}
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
