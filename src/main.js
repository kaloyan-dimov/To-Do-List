
window.addEventListener("load", () => {

    var username = 'root'
    var password = 'password'
    var servername = "localhost"
    var database = "tasks"
    // Make a POST request to your PHP script
    console.log(username, password, servername, database)

    debugger;
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
            console.log(rtxt);
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

})