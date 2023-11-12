<?php
    
    function check_db_exists($database, $conn, $response) {

    $checkDatabaseQuery = "SHOW DATABASES LIKE '$database'";
    $result = $conn->query($checkDatabaseQuery);

    if ($result->num_rows == 0) {
        $createDatabaseQuery = "CREATE DATABASE $database";
        if ($conn->query($createDatabaseQuery) === TRUE) {

            array_push($response, array('db_status' => 'Success', 'db_message' => "Database '$database' created successfully."));
            echo json_encode($response);
            return;
        } else {
            array_push($response, array('db_status' => 'Error', 'db_message' => $conn->error));
            echo json_encode($response);
            return;
        }
    } else {
        array_push($response, array('db_status' => 'Success', 'db_message' => "Database '$database' already exists."));
        echo json_encode($response);
        return;
    }

    // Select the database
    $conn->select_db($database);
    // create_table($conn);
}

?>