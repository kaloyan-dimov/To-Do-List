import getHTTPObject from "./getHTTPObject.js"

export default () => {

    document.querySelectorAll(".delete").forEach(item => {
        item.addEventListener("click", () => {
            let task_id = item.parentNode.id
            delete_task(task_id)
        })
    })
    function delete_task(task_id) {
        var http = getHTTPObject();
        var form = new FormData();

        form.append('task_id', task_id);

        http.open('POST', 'src/php/delete_task.php');
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

    document.querySelectorAll(".edit").forEach(item => {
        item.addEventListener("click", () => {
            item.parentNode.classList.add("edit_mode")
            item.parentNode.querySelector(".title").setAttribute("contenteditable", true);
            item.parentNode.querySelector(".description").setAttribute("contenteditable", true);
        })
    })

    document.querySelectorAll(".tick").forEach(item => {
        item.addEventListener("click", () => {
            let task_id = item.parentNode.id
            let new_title = item.parentNode.querySelector(".title").innerHTML
            let new_description = item.parentNode.querySelector(".description").innerHTML
            item.parentNode.querySelector(".title").setAttribute("contenteditable", false);
            item.parentNode.querySelector(".description").setAttribute("contenteditable", false);
            update_task(task_id, new_title, new_description)
            item.parentNode.classList.remove("edit_mode")
        })
    })

    function update_task(task_id, new_title, new_description) {
        var http = getHTTPObject();
        var form = new FormData();

        form.append('task_id', task_id);
        form.append('title', new_title);
        form.append('description', new_description);

        http.open('POST', 'src/php/update_task.php');
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