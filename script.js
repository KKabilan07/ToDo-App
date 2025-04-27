function fun() {
    var msg = document.getElementById("task").value;
    var newTask = document.createElement("div");
    newTask.className = "task-box";
    newTask.innerHTML = `
        <span class="task-text">${msg}</span>
        <img src="Edit.png" class="edit" onclick="editTask(this)" alt="Edit">
        <img src="delete.png" class="delete" onclick="deleteTask(this)" alt="Delete">
    `;
    document.getElementById("res").appendChild(newTask);
    document.getElementById("task").value = "";
}

function del() {
    document.getElementById("res").innerHTML = "";
}

function deleteTask(imgElement) {
    var taskBox = imgElement.closest(".task-box");
    taskBox.remove();
}

function editTask(imgElement) {
    var taskBox = imgElement.closest(".task-box");
    var taskTextSpan = taskBox.querySelector(".task-text");
    var currentText = taskTextSpan.textContent.trim();
    var newText = prompt("Edit your task:", currentText);
    if (newText !== null && newText.trim() !== "") {
        taskTextSpan.textContent = newText;
    }
}