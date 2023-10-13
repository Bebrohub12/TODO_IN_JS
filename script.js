const taskList = document.getElementById('todo-list');
const taskInput = document.getElementById('task');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<span>${taskText}</span> <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function editTask(editButton) {
  const taskText = editButton.parentElement.querySelector('span').textContent;
  const newTaskText = prompt('Edit task:', taskText);
  if (newTaskText !== null) {
    editButton.parentElement.querySelector('span').textContent = newTaskText;
  }
}

function deleteTask(deleteButton) {
  const taskItem = deleteButton.parentElement;
  taskList.removeChild(taskItem);
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
