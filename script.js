document.getElementById('add-button').addEventListener('click', addTodo);
document.getElementById('new-todo').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    var todoText = document.getElementById("new-todo").value;
    if (todoText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var todoList = document.getElementById("todo-list");

    var listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${todoText}</span>
        <input type="checkbox" class="checkbox">
        <span class="delete-icon">&#10006;</span>
    `;

    listItem.querySelector('.delete-icon').addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    listItem.querySelector('.checkbox').addEventListener('change', function() {
        var span = listItem.querySelector('span');
        span.classList.toggle('completed');
    });

    todoList.appendChild(listItem);

    document.getElementById("new-todo").value = "";
}
