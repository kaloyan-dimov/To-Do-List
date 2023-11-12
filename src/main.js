import connect_mysql from './js/connect_mysql.js'
import add_task from './js/add_task.js';

window.addEventListener("load", () => {
    connect_mysql();
    add_task()
})