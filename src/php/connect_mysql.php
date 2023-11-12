
<?php

$servername = $_POST['servername'];
$username = $_POST['username'];
$password = $_POST['password'];
$database = $_POST['database'];

$response;
global $conn;

connect_mysql($servername, $username, $password, $database);

function connect_mysql($servername, $username, $password, $database) {
    
    try {
        $conn = new mysqli($servername, $username, $password);
        
        if ($conn->connect_error) {
            // echo "Connection error "; 
            $response = array('status' => 'Error', 'message' => $conn->connect_error);
            echo json_encode($response);
            // $conn->close();
            return;
        } 
    } catch (Exception $e) {
        $response = array('status' => 'Error', 'message' => $e->getMessage());
        echo json_encode($response);
        // $conn->close();
        return;
    }
    $response = array('status' => 'Success', 'message' => 'Connected');

    include('connect_db.php');
    check_db_exists($database, $conn, $response);
    
    return;
}

?> 