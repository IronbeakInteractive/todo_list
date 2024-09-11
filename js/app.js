let cardCount = 0;

const todoList = document.querySelector('.todo-list');

function loadTodos() {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    const todosArray = JSON.parse(savedTodos);
    todosArray.forEach(todo => {
      addTodoCard(todo.text, todo.completed);
    });
    cardCount = todosArray.length;
    checkCardCount();
  }
}

function saveTodos() {
  const todoCards = document.querySelectorAll('.todo-card');
  const todosArray = Array.from(todoCards).map(todoCard => {
    return {
      text: todoCard.querySelector('.todo-text').innerText,
      completed: todoCard.querySelector('.todo-checkbox').checked
    };
  });
  localStorage.setItem('todos', JSON.stringify(todosArray));
}

function addTodoCard(text = 'Todo Task One', completed = false) {
  const newTodoCard = document.createElement('div');
  newTodoCard.classList.add('todo-card');
  newTodoCard.innerHTML = `
    <label>
      <input type="checkbox" class="todo-checkbox" ${completed ? 'checked' : ''}>
    </label>
    <span class="todo-text">${text}</span>
    <div class="button_group">
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </div>
  `;

  todoList.appendChild(newTodoCard);
  cardCount++;
  saveTodos(); // Save after adding
  checkCardCount();
}

function handleDeleteButtonClick(event) {
  const todoCard = event.target.closest('.todo-card');
  if (todoCard) {
    todoCard.remove();
    cardCount--;
    saveTodos(); // Save after deleting
    checkCardCount();
  }
}

function handleDeleteAllButtonClick() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  cardCount = 0;
  saveTodos(); // Save after deleting all
  checkCardCount();
}

function handleRemoveCompletedButtonClick() {
  const todoCards = document.querySelectorAll('.todo-card');
  todoCards.forEach(todoCard => {
    const checkbox = todoCard.querySelector('.todo-checkbox');
    if (checkbox.checked) {
      todoCard.remove();
      cardCount--;
    }
  });
  saveTodos(); // Save after removing completed
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

  if (event.target.classList.contains('add-button')) {
    addTodoCard(); // Adds a new to-do card
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

function changeTheme() {
  const themeToggleButton = document.getElementById('theme-toggle');
  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
  });
}

// Initialize
loadTodos(); // Load todos when the page loads
checkCardCount();
changeTheme();
