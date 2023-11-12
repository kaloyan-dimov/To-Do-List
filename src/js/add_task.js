import getHTTPObject from "./getHTTPObject.js";

export default () => {
    let task_title;
    let task_description;
    document.getElementById("add_task").addEventListener("click", () => {
        task_title = document.getElementById("title").value
        task_description = document.getElementById("description").value
        add_task(task_title, task_description)
    })
    function add_task(title, description) {
        var http = getHTTPObject();
        var form = new FormData();

        form.append('title', title);
        form.append('description', description);

        http.open('POST', 'src/php/add_task.php');
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                var rtxt = http.responseText;
                console.log(rtxt, typeof rtxt);
                // let json_response = JSON.parse(rtxt)
            }
        }
        http.send(form);
    }
}