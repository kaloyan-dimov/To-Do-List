<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    $credentials = file_get_contents("credentials.json");
    $credentials_arr = json_decode($credentials, true);
    
    
    $servername = $credentials_arr['servername'];
    $username = $credentials_arr['username'];
    $password = $credentials_arr['password'];
    $database = $credentials_arr['database'];

    include_once("connect_mysql.php");

    $conn = connect_mysql($servername, $username, $password, $database);

    $title = $_POST["title"];
    $description = $_POST["description"];
    

    $insertTaskQuery = "INSERT INTO Tasks (title, description) VALUES ('$title', '$description')";

    if ($conn->query($insertTaskQuery) === TRUE) {
        array_push($response, array($response = array("add_message" => "Task added successfully.")));
        // echo json_encode($response);
        return;
    } else {
        array_push($response, array("add_message" => $conn->error));
        // echo json_encode($response);
        return;
    }
?>