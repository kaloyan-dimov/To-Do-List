<?php
    $servername = $_POST['servername'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $database = $_POST['database'];

    $credentials = json_encode([
        'servername' => $servername,
        'username' => $username,
        'password' => $password,
        'database' => $database
    ]);

    // Specify the filename where you want to store the JSON data
    $filename = "credentials.json";

    // Write the JSON data to the file
    file_put_contents($filename, $credentials);
?>