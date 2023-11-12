<?php
    date_default_timezone_set('Europe/Sofia');
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    header('Content-Type: text/html');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/main.css">
    <title>To Do List</title>
</head>
<body>
    <header><h1>To Do List on Localhost</h1></header>
    <div class="container">
    <div class="connection">
            <div class="connect_db">
                <button class="dropdown_btn">Connect to Database</button>
                <div class="credentials">
                    <div><h3>Credentials for MySQL database</h3></div>
                    <div>
                        <label for="host">Host:</label>
                        <input type="text" id="host" name="host" placeholder="Enter host" >
                    </div>
                    <div>
                        <label for="user">User:</label>
                        <input type="text" id="user" name="user" placeholder="Enter user">
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter password">
                    </div>
                    <div>
                        <label for="database">Database Name:</label>
                        <input type="text" id="database" name="database" placeholder="Enter database name">
                    </div>
                    <button class="connect_btn">Connect</button>
                </div>
            </div>
            <div class="connection_status"></div>
            <h2 class="connection_message"></h2>
            </div>
        </div>
    </div>
    <script defer src="./src/main.js" type="module"></script>
</body>
</html>