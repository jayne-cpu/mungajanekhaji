const tasks = []; // BONUS: array of objects
let taskId = 0;

// Form submit
document.getElementById("taskForm").addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();

    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    // Check empty input
    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task object (BONUS I)
    const task = {
        task_id: taskId,
        text: text,
        done: false
    };

    tasks.push(task);

    // Add to DOM
    displayTask(task);

    taskId++;
    input.value = "";
}

// Display task
function displayTask(task) {
    const container = document.querySelector(".listTasks");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-task-id", task.task_id);

    // ❌ Delete button
    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-xmark", "delete-btn");

    deleteBtn.addEventListener("click", () => deleteTask(task.task_id));

    // ☑️ Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => doneTask(task.task_id, label));

    // 🏷️ Label
    const label = document.createElement("label");
    label.textContent = task.text;

    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);

    container.appendChild(taskDiv);
}

// BONUS I → Done task
function doneTask(id, label) {
    const task = tasks.find(t => t.task_id === id);

    if (task) {
        task.done = !task.done;

        if (task.done) {
            label.classList.add("done");
        } else {
            label.classList.remove("done");
        }
    }
}

// BONUS II → Delete task
function deleteTask(id) {
    // Remove from array
    const index = tasks.findIndex(t => t.task_id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }

    // Remove from DOM
    const taskDiv = document.querySelector(`[data-task-id="${id}"]`);
    if (taskDiv) {
        taskDiv.remove();
    }
}