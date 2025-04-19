document.addEventListner('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById("addTaskBtn");
  const taskList = document.querySelector('.taskList');

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
    }
  }
});