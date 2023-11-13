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

    $task_id = $_POST["task_id"];
    $new_title = $_POST["title"];
    $new_description = $_POST["description"];

    $response;

    include_once("connect_mysql.php");

    $conn = connect_mysql($servername, $username, $password, $database);


    update_task($conn, $task_id, $new_title, $new_description, $database, $response);
    function update_task($conn, $task_id, $new_title, $new_description, $database, $response) {
        $update_task_query = "UPDATE Tasks SET title = '$new_title', description = '$new_description' WHERE id = $task_id;";

        if ($conn->query($update_task_query) === TRUE) {
            // array_push($response, array('delete_status' => 'Success', 'delete_message' => 'Task deleted successfully'));
            // echo json_encode($response);
            return $conn;
        } else {
            $errorMessage = $conn->error;
            // array_push($response, array('delete_status' => 'Error', 'delete_message' => $errorMessage));
            // echo json_encode($response);
            return;
        }
    }
?>