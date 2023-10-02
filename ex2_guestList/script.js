//elementos
const botaoAddGuest = document.getElementById('addGuest'); 
//botão para adicionar itens
const inputGuest = document.getElementById('guestInput');
//caixa de entrada de texto
const guestList = document.getElementById('guestList');
//elemento de lista pai
const btnDeleteAll = document.getElementById('deleteAll'); 
//botão deletar tudo
var checkBoxElmnt = document.querySelectorAll("input[type='checkbox']"); 
//checkbox nas listas
var btnDeletar = document.querySelectorAll("button[class='deletar']"); 
//botão para apagar elemento
var todosItens = document.querySelectorAll('li[class="itemsList"]'); 
//todos os elementos 'li'

const r = /\d+/; //detectar número
var count = 0; //contador de itens da lista 
/* // sistema de detectar nomes inválidos em forma de função 
var erro = 0; 
for (let i = 0; i < checkBoxElmnt.length; i++) {
    //escutador de checkbox
    checkBoxElmnt['check-' + i].addEventListener("click", riscarTexto(i));
}

function verificador(str,erro) {
    const caracteres = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numeros = /\d/;
    const vazio = "";
    //erro = 0;
    if(caracteres.test(str)){
        console.log('pego erro 3')
        erro = 3;
        console.log(erro)
        return true;
    } else if(numeros.test(str)){
        console.log('pego erro 2')
        erro = 2;
        console.log(erro)
        return true;
    } else if(str==""){
        console.log('pego erro 1')
        erro = 1;
        console.log(erro)
        return true;
    }
     else{
        console.log('sem erro')
        erro = 0;
        console.log(erro)
        return false;
    }
  }
*/

function addGuestEvent(){
    console.log('botão clicado');
    const guestName = inputGuest.value;
    
    const caracteres = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numeros = /\d/;
    const vazio = "";

    if(caracteres.test(guestName)){
        alerta.innerHTML= 'O nome <strong>não</strong> deve conter caracteres especiais.';
        console.log('caracteres especiais encontrados');
    } else if(numeros.test(guestName)){
        alerta.innerHTML= 'O nome <strong>não</strong> deve conter números.';
        console.log('números encontrados');
        
    } else if(guestName==""){
        alerta.innerHTML= 'O campo está vazio!';
        console.log('campo vazio');

    }else{
        alerta.innerHTML = 'Convidado Adicionado';
        console.log('convidado adicionado');

        //cria o container do item do objeto
        const guestItem = document.createElement('li');
        guestItem.className = 'itemsList'
        guestItem.id = 'li-' + count;

        //cria o checkbox
        const itemBox = document.createElement('input');
        itemBox.type = 'checkbox';
        itemBox.id = count;
        itemBox.className = 'guestCheck';

        //escutador para esta checkbox
        itemBox.addEventListener("click",function(event){
            const checkedBox = event.target;
            checked = checkedBox.checked;
            riscarTexto(checkedBox.id,checked);
        });

        //cria o item de texto
        const item = document.createElement('span');
        item.id = 'item-' + count;
        item.innerHTML = guestName;

        //elemento para deletar
        const btnDelete = document.createElement('button');
        btnDelete.id = 'del-' + count;
        btnDelete.className = 'deletar';
        btnDelete.textContent = 'Deletar';
        //escutador para o botão
        
        btnDelete.addEventListener("click",function(event){
            apagarItem(event.target.id);
        });
        
        //montando os itens
        guestList.appendChild(guestItem);
        guestItem.appendChild(itemBox);
        guestItem.appendChild(item);
        guestItem.appendChild(btnDelete);
        count++;
        
        inputGuest.value='';
        setTimeout(()=>{
            alerta.innerHTML = '';
        },2000);
    }
    checkBoxElmnt = document.querySelectorAll("input[type='checkbox']");
    btnDeletar = document.querySelectorAll("button[class='deletar']");

    setTimeout(()=>{
        alerta.innerHTML = '';
    },2000);
}

function riscarTexto(BoxID,check){
    const pos = (BoxID.match(r));
    //log do número extraído do id do checkbox
    console.log ('riscarTexto() na posição '+pos[0]);

    let id = 'item-'+pos[0];
    //elemento a ser riscado
    const item = document.getElementById(id);
    
    if(check){
    alerta.innerHTML = ('item riscado na posição '+pos[0]);
        item.style.color = "gray";
        item.style.textDecoration = 'line-through';
        
        setTimeout(()=>{
        alerta.innerHTML = '';
    },1500);
    }else{
        item.style.color = "black";
        item.style.textDecoration = 'none';
    }
}

function apagarItem(delID){
    const pos = (delID.match(r));
    //log do número extraído do id do checkbox
    console.log ('apagarItem() na posição '+pos[0]);

    let id = 'li-'+pos[0];
    //elemento a ser riscado
    const item = document.getElementById(id);
    item.remove();

    alerta.innerHTML = ('Item apagado na posição '+pos[0]);
    setTimeout(()=>{
        alerta.innerHTML = '';
    },1500);
};

function deleteAllEvent(){
	todosItens = document.querySelectorAll('li[class="itemsList"]');
	console.log(todosItens.length)
	if(todosItens.length>0){
		console.log('delete all true');
		for(var i = 0; i < todosItens.length; i++){
			console.log('removido item '+i)
			todosItens[i].remove();
			alerta.innerHTML = 'Todos os itens foram apagados!';
		}
	} else{
		console.log('delete all false');
		alerta.innerHTML = 'A lista está vazia!';
		
	}
	count = 0;
  setTimeout(()=>{
        alerta.innerHTML = '';
    },1500);
}

btnDeleteAll.addEventListener('click',deleteAllEvent);

botaoAddGuest.addEventListener('click',addGuestEvent);

document.addEventListener("keydown", function(event){ //escutador de tecla
    if((event.key === "Enter")){   //executa a função com a tecla Enter
        addGuestEvent();
    } 
});