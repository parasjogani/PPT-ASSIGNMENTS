const taskInput = document.getElementById('task-input');
const submitBtn = document.getElementById('submit-btn');
const taskList = document.getElementById('task-list');

submitBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task !== '') {
        const taskItem = createTaskItem(task);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function createTaskItem(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const taskValue = document.createElement('p');
    taskValue.textContent = task;

    const status = document.createElement('span');
    status.textContent = 'Status: Pending';

    const removeBtn = createButton('Remove', 'remove-btn');
    removeBtn.addEventListener('click', () => {
        taskItem.remove();
    })

    const completeBtn = createButton('Mark Completed', 'complete-btn');
    completeBtn.addEventListener('click', () => {
        status.textContent = 'Status: Completed';
        completeBtn.style.backgroundColor = "yellow";
        completeBtn.style.color = "black";
        completeBtn.textContent = "Mark Pending"
    })
    const editBtn = createButton('Edit Task', 'edit-btn');

    taskItem.appendChild(taskValue);
    taskItem.appendChild(status);
    taskItem.appendChild(removeBtn);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);

    return taskItem;
}


function createButton(text, className) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    return button;
}
