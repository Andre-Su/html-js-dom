const btnSave = document.getElementById('saveBtn');
const pSaida = document.getElementById('output');
const input = document.getElementById('inputValue');

function saveLocalStorage(){
  //localStorage.setItem('nome_coluna',valor);
  //localStorage.getItem('nome_coluna');
  if(input.value==""){
    pSaida.textContent = 'Texto vazio!';
  } else{
    localStorage.setItem('meu_valor',input.value);
    var meuValorArmazenado = localStorage.getItem('meu_valor');
    console.log(meuValorArmazenado);
    pSaida.textContent = 'Conteúdo do arquivo: '+meuValorArmazenado;}
}

btnSave.addEventListener('click',saveLocalStorage);
