
let cardCount = 0;

function handleDeleteButtonClick(event) {
  const todoCard = event.target.closest('.todo-card');
  if (todoCard) {
    todoCard.remove(); // Removes the todo card from the DOM
    cardCount--;
    checkCardCount()
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
  cardCount++;
  checkCardCount()
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

function checkCardCount() {
  const messageDiv = document.querySelector('.card-count');
  if (cardCount === 0) {
    messageDiv.innerHTML = '<p>No to-dos available</p>';
  } else {
    messageDiv.innerHTML = ''; // Clear message if there are to-dos
  }
}

checkCardCount();
