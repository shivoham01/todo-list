const inputtodo = document.getElementById("input-todo");
const addtodo = document.getElementById("add-todo");
const alltodos = document.getElementById("all-todos");

if (!localStorage.getItem("todos")) {
    let todos = localStorage.setItem("todos", "[]");
}
let todos = JSON.parse(localStorage.getItem("todos"));

// HandleChange
let handleChange = (e) => {
    inputtodo == e.value;
}

// Addtodo
addtodo.addEventListener('click', () => {
    if (inputtodo.value === "") {
        return alert("Please add text...");
    }
    let inputvalue = {
        id: Date.now(),
        todo: inputtodo.value
    }
    todos.push(inputvalue);
    localStorage.setItem("todos", JSON.stringify(todos));
    inputtodo.value = "";
    location.reload();
});

// DeleteTodo
const handleDelete = (todoId) => {
    let getAllTodos = JSON.parse(localStorage.getItem("todos"));
    let filteredTodos = getAllTodos.filter(todo => todo.id !== todoId)
    todos.push(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    location.reload();
}

// AllTodos
let getAllTodos = JSON.parse(localStorage.getItem("todos"));

for (let i = 0; i < getAllTodos.length; i++) {
    alltodos.innerHTML += `
                <div class="todo">
                    <div class="title-div">
                        <h4>${getAllTodos[i].todo}</h4>
                        <button onclick ="handleDelete(${getAllTodos[i].id})" class="btn">D</button>
                    </div>
                </div>
        `
}

// Delete All Todos
const deleteAll = () => {
    localStorage.clear();
    location.reload();
}