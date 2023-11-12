export default (tasks) => {
    const list_taks = document.querySelector(".list_tasks")

    tasks.forEach(task => {
        list_taks.innerHTML +=
        `<div class="task" id=${task.id}>
            <h2 class="title">${task.title}</h2>
            <h3 class="description">${task.description}</h3>
            <h4 class="timestamp">Created: ${task.created_at}</h4>
            <h4 class="timestamp">Last Updated: ${task.updated_at}</h4>
        </div>
        `
        console.log(task)

    })
}