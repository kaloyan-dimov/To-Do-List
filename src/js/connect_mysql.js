import getHTTPObject from "./getHTTPObject.js";
import list_tasks from './list_tasks.js';

export default () => {
  
    mysql_authenticate()

    document.querySelector(".dropdown_btn").addEventListener("click", () => {
        document.querySelector(".connect_db").classList.toggle("active")
    })

    document.querySelector(".connect_btn").addEventListener("click", () => {
        servername = document.getElementById("host").value
        username = document.getElementById("user").value
        password = document.getElementById("password").value
        database = document.getElementById("database").value

        mysql_credentials_change(servername, username, password, database)

    })

   function mysql_credentials_change(servername, username, password, database) {
        var http = getHTTPObject();
        var form = new FormData();

        form.append('servername', servername);
        form.append('username', username);
        form.append('password', password);
        form.append('database', database);

        http.open('POST', 'src/php/configure_authentication.php');
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                var rtxt = http.responseText;
                console.log(rtxt, typeof rtxt, JSON.parse(rtxt));
                let json_response = JSON.parse(rtxt)
                document.querySelector(".connection_message").innerHTML = json_response.message
                json_response.status == "Success" ?  
                document.querySelector(".connection").classList.add("success") :
                document.querySelector(".connection").classList.remove("success"); 
            }
        }
        http.send(form);
        mysql_authenticate()
    }


    function mysql_authenticate() {
        var http = getHTTPObject();
        var form = new FormData();

        http.open('POST', 'src/php/connect_mysql.php');
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                var rtxt = http.responseText;
                // console.log(rtxt, typeof rtxt, JSON.parse(rtxt));
                let json_response = JSON.parse(rtxt)
                document.querySelector(".connection_message").innerHTML = json_response.message
                json_response.status == "Success" ?  
                document.querySelector(".connection").classList.add("success") :
                document.querySelector(".connection").classList.remove("success"); 
                // console.log(json_response["2"].tasks)
                list_tasks(json_response["2"].tasks)
            }
        }
        http.send(form);
    }
}