let addButton = document.querySelector(".add-button");

let addTask = document.querySelector(".add-task");

let addTaskAddButton = document.querySelector(".add-task-add-button");

let input = document.querySelector(".input");

let toDo = document.querySelector(".im");


addButton.addEventListener("click", () => {
    addTask.classList.add("flex");
})

let todos

addTaskAddButton.addEventListener("click", () => {
    if (localStorage.getItem("to-dos" == null)) {
        todos = "";
    } else {
        todos = localStorage.getItem("to-dos") + ",";
    }
	toDo.innerHTML += '<p class="par">' + input.value + '</p>';
    localStorage.setItem("to-dos", todos + input.value);
	input.value = "";
    addTask.classList.remove("flex");
})
