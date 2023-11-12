export default (tasks) => {
    const list_taks = document.querySelector(".list_tasks")

    tasks.forEach(task => {
        list_taks.innerHTML +=
        ``
        console.log(task)

    })
}