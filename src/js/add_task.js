import getHTTPObject from "./getHTTPObject.js";
import list_tasks from "./list_tasks.js";

export default () => {

    document.querySelector(".toggle_add_task").addEventListener("click", () => {
        document.querySelector(".task_input").classList.toggle("active")
    })

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

                // console.log(rtxt)
                // let json_response = JSON.parse(rtxt)
                // list_tasks(json_response["2"].tasks)
                location.reload();
            }
        }
        http.send(form);
    }
}