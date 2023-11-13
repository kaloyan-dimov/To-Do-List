
<?php
$credentials = file_get_contents("credentials.json");
$credentials_arr = json_decode($credentials, true);


$servername = $credentials_arr['servername'];
$username = $credentials_arr['username'];
$password = $credentials_arr['password'];
$database = $credentials_arr['database'];

$response = array();

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
        array_push($response, array('status' => 'Error', 'message' => $e->getMessage()));
        echo json_encode($response);
        // $conn->close();
        return;
    }
    $response = array('status' => 'Success', 'message' => 'Connected');

    include_once('connect_db.php');
    check_db_exists($database, $conn, $response);
    

    return $conn;
}

?> 