<?php

    function list_tasks($conn, $response) {
        $listTasksQuery = "SELECT * FROM Tasks";
        $result = $conn->query($listTasksQuery);

        if ($result === FALSE) {
            $errorMessage = $conn->error;
            array_push($response, array('list_status' => 'Error', 'list_message' => $errorMessage));
            echo json_encode($response);
            return;
        }

        $tasks = array();

        while ($row = $result->fetch_assoc()) {
            $tasks[] = $row;
        }

        array_push($response, array('list_status' => 'Success', 'list_message' => 'Tasks listed successfully', 'tasks' => $tasks));
        echo json_encode($response);

        return $conn;
    }

?>