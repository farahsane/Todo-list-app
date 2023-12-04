let taskInput = document.querySelector(".newtask input");
let addButton = document.querySelector(".push");
let tasks = document.querySelector(".tasks");

addButton.onclick = function () {
    // console.log(taskInput.value);
    if (taskInput.value.length == 0) {
        alert("Please select a task");
    } else {
        tasks.innerHTML += `
        <li class="task">
        <span onclick="this.classList.toggle('completed')" >
        ${taskInput.value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </li>
        `;
        console.log(taskInput.value);
        taskInput.value = "";
        let currentTask = document.querySelectorAll(".delete");
        for (let i = 0; i < currentTask.length; i++) {
              currentTask[i].onclick = function() {
                this.parentNode.remove();
              };
        }
    }
};