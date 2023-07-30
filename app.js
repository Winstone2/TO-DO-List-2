const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");

let tasks = [];

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.description;
        li.classList.add(task.completed ? "completed" : "");
        li.setAttribute("data-index", index);
        li.addEventListener("click", toggleTaskCompletion);

        taskList.appendChild(li);
    });
}

function addTask(description) {
    if (description.trim() === "") {
        return;
    }

    const newTask = {
        description,
        completed: false,
    };

    tasks.push(newTask);
    renderTasks();
}

function toggleTaskCompletion(event) {
    const index = event.target.getAttribute("data-index");
    if (index !== null) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }
}

taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask(taskInput.value);
        taskInput.value = "";
    }
});

addButton.addEventListener("click", () => {
    addTask(taskInput.value);
    taskInput.value = "";
});

// Initial rendering of tasks
renderTasks();
