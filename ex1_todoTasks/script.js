//elementos
const botaoAddTask = document.getElementById('addTask');
const inputTask = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
var checkboxElems = document.querySelectorAll("input[type='checkbox']");
const textoVazio = inputTask.value;

var count = 0;

for (let i = 0; i < checkboxElems.length; i++) {//escutador de checkbox
  checkboxElems['check-' + i].addEventListener("click", riscarTexto(i));
}

function getRandomHexColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}

function addTaskEvent(){
    const color1 = getRandomHexColor();
    botaoAddTask.style.backgroundColor = color1;
    const taskText = inputTask.value.trim();
    
    if(taskText===textoVazio){
        botaoAddTask.textContent = 'Texto Vazio!';
        setTimeout(()=>{
            botaoAddTask.textContent = 'Adicionar Tarefa';
        },2000);

    }else{
        botaoAddTask.textContent = 'Tarefa Adicionada';

        //cria o container da tarefa
        const taskItem = document.createElement('li');
        taskItem.id = 'li-' + count;

        //cria o checkbox
        const itemBox = document.createElement('input');
        itemBox.type = 'checkbox';
        itemBox.id = count;
        itemBox.className = 'taskCheck';

        //escutador para esta checkbox
        itemBox.addEventListener("click",function(event){
            const checkedBox = event.target;
            checked = checkedBox.checked;
            riscarTexto(checkedBox.id,checked);
        });
        //cria o item de texto

        const item = document.createElement('span');
        item.id = 'item-' + count;
        item.innerHTML = taskText;
        
        taskList.appendChild(taskItem);
        taskItem.appendChild(itemBox);
        taskItem.appendChild(item);
        count++;

        setTimeout(()=>{
            botaoAddTask.textContent = 'Adicionar Tarefa';
            inputTask.value=textoVazio;
        },2000);
    }
    checkboxElems = document.querySelectorAll("input[type='checkbox']");
}

function riscarTexto(pos,check){
    let id = 'item-'+pos;
    //elemento a ser riscado
    const item = document.getElementById(id);
    if(check){
        item.style.color = "gray";
        item.style.textDecoration = 'line-through';
    }else{
        item.style.color = "black";
        item.style.textDecoration = 'none';
    }
}

botaoAddTask.addEventListener('click',addTaskEvent);

document.addEventListener("keydown", function(event){ //escutador de tecla
    if((event.key === "Enter")){   //executa a função com a tecla Enter
        addTaskEvent();
    } 
});