<?php
    function create_table($conn, $response) {
        $createTableQuery = "CREATE TABLE IF NOT EXISTS Tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )";
    
        if ($conn->query($createTableQuery) === TRUE) {
            array_push($response, array( 'table_status' => 'Success', "table_message" => "Table created successfully"));
            include_once('list_tasks.php');
            list_tasks($conn, $response);
            return $conn;
        } else {
            die("Error creating table: " . $conn->error);
            array_push($response, array( 'table_status' => 'Error', "table_message" => $conn->error));
            echo json_encode($response);
            return;
        }
        
    }

    function check_db_exists($database, $conn, $response) {

    $checkDatabaseQuery = "SHOW DATABASES LIKE '$database'";
    $result = $conn->query($checkDatabaseQuery);

    if ($result->num_rows == 0) {
        $createDatabaseQuery = "CREATE DATABASE $database";
        if ($conn->query($createDatabaseQuery) === TRUE) {

            array_push($response, array('db_status' => 'Success', 'db_message' => "Database '$database' created successfully."));
            $conn->select_db($database);
            create_table($conn, $response);
        } else {
            array_push($response, array('db_status' => 'Error', 'db_message' => $conn->error));
            echo json_encode($response);
            return;
        }
    } else {
        array_push($response, array('db_status' => 'Success', 'db_message' => "Database '$database' already exists."));
        $conn->select_db($database);
        create_table($conn, $response);
    }
    
}

?>