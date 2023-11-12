export default () => {
    var servername = "localhost"
    var username = 'root'
    var password = 'password'
    var database = "tasks"

    document.querySelector(".dropdown_btn").addEventListener("click", () => {
        document.querySelector(".connect_db").classList.toggle("active")
    })

    document.querySelector(".connect_btn").addEventListener("click", () => {
        servername = document.getElementById("host").value
        username = document.getElementById("user").value
        password = document.getElementById("password").value
        database = document.getElementById("database").value

        mysql_authenticate(servername, username, password, database)

    })

    mysql_authenticate(servername, username, password, database)

    function mysql_authenticate(servername, username, password, database) {
        var http = getHTTPObject();
        var form = new FormData();

        form.append('servername', servername);
        form.append('username', username);
        form.append('password', password);
        form.append('database', database);

        http.open('POST', 'src/php/connect_db.php');
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

        function getHTTPObject() { 
            var xmlhttp; 
            
            if(window.XMLHttpRequest){ 
                xmlhttp = new XMLHttpRequest(); 
            } 
            else if (window.ActiveXObject){ 
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
                if (!xmlhttp){ 
                    xmlhttp=new ActiveXObject("Msxml2.XMLHTTP"); 
                } 
                
            } 
            return xmlhttp;
        }
    }
}