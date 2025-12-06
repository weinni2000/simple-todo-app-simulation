const button = document.getElementById('add-todo');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

button.addEventListener('click', function() {
    const newTodo = input.value;
    // BUG: Should check if input is empty, currently can add empty todos
    if (newTodo) {
        const listItem = document.createElement('li');
        listItem.textContent = newTodo;
        // BUG: No functionality to mark the todo as completed
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });
        list.appendChild(listItem);
        input.value = '';
    }
    // BUG: No code to prevent adding the same todo multiple times
});

// BUG: Function to remove todos not implemented yet
// TODO: Implement function to clear completed todos
