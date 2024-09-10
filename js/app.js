let cardCount = 0;

const todoList = document.querySelector('.todo-list');

function handleDeleteButtonClick(event) {
  const todoCard = event.target.closest('.todo-card');
  if (todoCard) {
    todoCard.remove(); // Removes the todo card from the DOM
    cardCount--;
    checkCardCount();
  }
}

function handleDeleteAllButtonClick() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  cardCount = 0;
  checkCardCount();
}

function handleAddButtonClick() {
  const newTodoCard = document.createElement('div');
  newTodoCard.classList.add('todo-card');
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

  todoList.appendChild(newTodoCard);
  cardCount++;
  checkCardCount();
}

function handleRemoveCompletedButtonClick() {
  const todoCards = document.querySelectorAll('.todo-card');

  todoCards.forEach(todoCard => {
    const checkbox = todoCard.querySelector('.todo-checkbox');
    if (checkbox.checked) {
      todoCard.remove(); // Remove the completed task
      cardCount--;
    }
  });

  checkCardCount();
}

// Add event listener to all buttons
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    handleDeleteButtonClick(event);
  }

  if (event.target.classList.contains('del-all-button')) {
    handleDeleteAllButtonClick();
  }

  if (event.target.classList.contains('clear-comp-button')) {
    handleRemoveCompletedButtonClick();
  }

  if(event.target.classList.contains('add-button')) {
    handleAddButtonClick();
  }
});

function checkCardCount() {
  const messageDiv = document.querySelector('.card-count');
  if (cardCount === 0) {
    messageDiv.innerHTML = '<p class="card-count">No to-dos available</p>';
  } else {
    messageDiv.innerHTML = ''; // Clear message if there are to-dos
  }
}

function changeTheme(){
  const themeToggleButton = document.getElementById('theme-toggle');
  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
  });
}


checkCardCount();
changeTheme();
