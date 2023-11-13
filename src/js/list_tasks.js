import modify_tasks from "./modify_tasks.js"

export default (tasks) => {
    const list_taks = document.querySelector(".list_tasks")
    let all_tasks = ''
    tasks.forEach(task => {
        all_tasks +=
        `<div class="task" id=${task.id}>
            <h2 class="title">${task.title}</h2>
            <h3 class="description">${task.description}</h3>
            <h4 class="timestamp">Created: ${task.created_at}</h4>
            <h4 class="timestamp">Last Updated: ${task.updated_at}</h4>
            <div class="icon delete"></div>
            <div class="icon edit"></div>
            <div class="icon tick"></div>
        </div>
        `
    })

    list_taks.innerHTML = all_tasks 
    modify_tasks()
}