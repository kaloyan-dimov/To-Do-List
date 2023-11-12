
<?php

$servername = $_REQUEST['servername'];
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
$database = $_REQUEST['database'];

$response;

connect_db($servername, $username, $password, $database);

function connect_db($servername, $username, $password, $database) {
    
    try {
        $conn = new mysqli($servername, $username, $password);
        
        if ($conn->connect_error) {
            // echo "Connection error "; 
            $response = array('status' => 'Error', 'message' => $conn->connect_error);
            echo json_encode($response);
            return;
        } 
        $conn->close();
    } catch (Exception $e) {
        $response = array('status' => 'Error', 'message' => $e->getMessage());
        echo json_encode($response);
        return;
    }
    $response = array('status' => 'success', 'message' => 'Connected');
    echo json_encode($response);
    return;
}

?> 