//elementos
const botaoAddTask = document.getElementById('addTask');
const inputTask = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const textoVazio = inputTask.value;
var checkboxes = document.querySelectorAll("input[type=checkbox]");

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
    if(inputTask.value===textoVazio){
        console.log('tarefa não adicionada, texto vazio')
    }else{
        botaoAddTask.textContent = 'Tarefa Adicionada';

        //cria o container da tarefa
        const taskItem = document.createElement('label');
        taskItem.id = 'lab-' + count;

        //cria o checkbox
        const itemBox = document.createElement('input');
        itemBox.type = 'checkbox';
        itemBox.id = 'check-' + count;


        //cria o item de texto
        const item = document.createElement('li');
        item.id = 'li-' + count;
        item.textContent = inputTask.value;
        console.log('Adicionada a tarefa '+item.id+', texto: '+item.textContent)
        
        taskList.appendChild(taskItem);
        taskItem.appendChild(itemBox);
        taskItem.appendChild(item);
        count++;

        setTimeout(()=>{botaoAddTask.textContent = 'Adicionar Tarefa';inputTask.value=textoVazio;},3000);
    }
}

botaoAddTask.addEventListener('click',addTaskEvent);