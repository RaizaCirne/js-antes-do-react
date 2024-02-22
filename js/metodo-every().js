// every() -> Retorna um boleano true ou false
// Retorna true: caso TODOS os itens satisfazem a uma condição 

const array = [1, 2, 3, 4, 5, 'teste']; 

// Verificando se todos os itens do array são números -> do tipo number
const todosItensSaoNumeros = array.every(item => typeof item === 'number');
document.body.innerText = JSON.stringify(todosItensSaoNumeros); // mostra retorno na tela 

// Retorna true se todos os itens passarem na condição
// false se pelo menos 1 deles não passar. 