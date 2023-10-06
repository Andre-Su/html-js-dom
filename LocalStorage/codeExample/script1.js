const saveButton = document.getElementById('saveButton');
const retrieveButton = document.getElementById('retrieveButton');
const deleteButton = document.getElementById('deleteButton');
const output = document.getElementById('output');

saveButton.addEventListener('click', saveValue);
retrieveButton.addEventListener('click', retrieveValue);
deleteButton.addEventListener('click', deleteValue);

function saveValue() {
    const inputValue = document.getElementById('inputValue').value;
    const position = document.getElementById('positionInput').value;

    if (!inputValue || !position) {
        alert('Preencha todos os campos.');
        return;
    }

    localStorage.setItem(`meu_valor_${position}`, inputValue);
    //alert(`Valor "${inputValue}" salvo na posição ${position}.`);
    document.getElementById('inputValue').value = '';
    document.getElementById('positionInput').value = '';
    
    // Exibir todos os elementos salvos após salvar
    displayAllValues();
}

function retrieveValue() {
    const position = document.getElementById('positionInput').value;

    if (!position) {
        alert('Informe uma posição para recuperar o valor.');
        return;
    }

    const retrievedValue = localStorage.getItem(`meu_valor_${position}`);

    if (retrievedValue === null) {
        alert(`Nenhum valor encontrado na posição ${position}.`);
    } else {
        output.textContent = `Valor na posição ${position}: ${retrievedValue}`;
    }
}

function deleteValue() {
    const position = document.getElementById('positionInput').value;

    if (!position) {
        alert('Informe uma posição para deletar o valor.');
        return;
    }

    const deletedValue = localStorage.getItem(`meu_valor_${position}`);

    if (deletedValue === null) {
        alert(`Nenhum valor encontrado na posição ${position}.`);
    } else {
        localStorage.removeItem(`meu_valor_${position}`);
        alert(`Valor na posição ${position} deletado.`);
        document.getElementById('positionInput').value = '';
        output.textContent = ''; // Limpa o conteúdo de saída
        
        // Exibir todos os elementos restantes após deletar
        displayAllValues();
    }
}

function displayAllValues() {
    let allValuesHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith('meu_valor_')) {
            const position = key.replace('meu_valor_', '');
            const value = localStorage.getItem(key);
            allValuesHTML += `Posição ${position}: ${value}<br>`;
        }
    }

    if (allValuesHTML === '') {
        allValuesHTML = 'Nenhum valor armazenado.';
    }

    output.innerHTML = allValuesHTML;
}
