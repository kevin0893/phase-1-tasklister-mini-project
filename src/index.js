document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const taskList = document.getElementById('tasks')
  const taskInput = document.getElementById('new-task-description')
  form.addEventListener( 'submit',function(event){
    event.preventDefault() 
     const taskDescription = taskInput.value.trim(); // Get the task description

    if (taskDescription !== '') {
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = taskDescription;
       // Create a delete button
       const deleteButton = document.createElement('button');
       deleteButton.textContent = '❌'; // Unicode for cross mark
       deleteButton.addEventListener('click', function() {
         taskList.removeChild(listItem); // Remove the task when delete button is clicked
       });

       // Append the delete button to the task item
       listItem.appendChild(deleteButton);

      // Append the new task to the task list
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = '';
    } else {
      alert('Please enter a task description!');
    }
  });
    // Sorting functionality based on priority
    function sortTasksByPriority() {
      const tasks = Array.from(taskList.children);
      tasks.sort((a, b) => {
        const priorityA = a.classList.contains('high-priority') ? 3 : a.classList.contains('medium-priority') ? 2 : 1;
        const priorityB = b.classList.contains('high-priority') ? 3 : b.classList.contains('medium-priority') ? 2 : 1;
        return priorityB - priorityA;
      });
      taskList.innerHTML = ''; // Clear current task list
      tasks.forEach(task => {
        taskList.appendChild(task); // Append sorted tasks to the task list
      });
    }
    
    // Add event listener for sorting button
    const sortButton = document.createElement('button');
    sortButton.textContent = 'Sort by Priority';
    sortButton.addEventListener('click', sortTasksByPriority);
    document.body.appendChild(sortButton);
});