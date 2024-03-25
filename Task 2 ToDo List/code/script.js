function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      var li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" onclick="toggleTask(this)">
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Delete</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  
  function removeTask(button) {
    button.parentElement.remove();
  }
  
  function toggleTask(checkbox) {
    var task = checkbox.parentElement;
    if (checkbox.checked) {
      task.style.textDecoration = 'line-through';
    } else {
      task.style.textDecoration = 'none';
    }
  }
  