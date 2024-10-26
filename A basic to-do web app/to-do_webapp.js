document.getElementById("addButton").addEventListener("click", addTask);
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const task = {
        text: taskText,
        date: new Date().toLocaleString(),
        completed: false
    };
    displayTask(task);
    taskInput.value = ""; 
}
function displayTask(task) {
    const taskList = document.getElementById("pendingTasks");
    const li = document.createElement("li");
    li.textContent = `${task.text} (Added on: ${task.date})`;
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "completeButton";
    completeButton.onclick = function() {
        markComplete(task, li);
    };
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "editButton";
    editButton.onclick = function() {
        editTask(task, li);
    };
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
function markComplete(task, li) {
    const completedTasks = document.getElementById("completedTasks");
    li.remove();
    const completedLi = document.createElement("li");
    completedLi.textContent = `${task.text} (Completed on: ${new Date().toLocaleString()})`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    deleteButton.onclick = function() {
        completedLi.remove();
    };
    completedLi.appendChild(deleteButton);
    completedTasks.appendChild(completedLi);
}
function editTask(task, li) {
    const newTaskText = prompt("Edit your task:", task.text);
    if (newTaskText) {
        task.text = newTaskText;
        li.firstChild.nodeValue = `${task.text} (Added on: ${task.date})`;
    }
}
document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});