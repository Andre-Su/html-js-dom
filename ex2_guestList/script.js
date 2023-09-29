//elementos
const botaoAddTask = document.getElementById('addTask');
const inputTask = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

var count = 0;

function getRandomHexColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}

function addTaskEvent(){
    botaoAddTask.style.backgroundColor = getRandomHexColor();

    const taskItem = document.createElement('li');
    taskItem.className = 'itemList'
    taskItem.style.box
    taskItem.textContent = inputTask.value;
    taskItem.id = 'li-' + count;
    taskList.appendChild(taskItem);
    count++;
}

botaoAddTask.addEventListener('click',addTaskEvent);