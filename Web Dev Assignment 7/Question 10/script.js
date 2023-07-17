const taskInput = document.getElementById('task-input');
const submitBtn = document.getElementById('submit-btn');
const taskList = document.getElementById('task-list');
const modal = document.getElementById('modal');
const modalInput = document.getElementById('modal-input');
const updateBtn = document.getElementById('update-btn');
const cancelBtn = document.getElementById('cancel-btn');
let currentTaskItem = null;

submitBtn.addEventListener('click', addTask);

updateBtn.addEventListener('click', updateTask);
cancelBtn.addEventListener('click', closeModal);

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
    editBtn.addEventListener('click', () => {
        openModal(taskItem, taskValue.textContent);
    });

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

function openModal(taskItem, taskValue) {
    currentTaskItem = taskItem;
    modalInput.value = taskValue;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function updateTask() {
    const updatedTask = modalInput.value.trim();
    if (updatedTask !== '') {
        currentTaskItem.querySelector('p').textContent = updatedTask;
        closeModal();
    }
}
