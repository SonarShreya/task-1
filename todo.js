document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <span class="delete">Delete</span>
            `;
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = "";

            // Add a delete task listener to the new task
            listItem.querySelector(".delete").addEventListener("click", function() {
                taskList.removeChild(listItem);
            });
        }
    });

    // Allow Enter key to add tasks
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
