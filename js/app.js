// Function to handle delete button click
function handleDeleteButtonClick(event) {
  const todoCard = event.target.closest('.todo-card');
  if (todoCard) {
    todoCard.remove(); // Removes the todo card from the DOM
  }
}

function handleAddButtonClick() {
  const todoList = document.querySelector('.todo-list')

  const newTodoCard = document.createElement('div')
  newTodoCard.classList.add('todo-card')
  newTodoCard.innerHTML = `
    <label>
      <input type="checkbox" class="todo-checkbox">
    </label>
    <span class="todo-text">Todo Task One</span>
    <div class="button_group">
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </div>
  `;

  todoList.appendChild(newTodoCard)
}

// Add event listener to all delete buttons
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    handleDeleteButtonClick(event);
  }

  if(event.target.classList.contains('add-button')) {
    handleAddButtonClick(event);
  }
});
