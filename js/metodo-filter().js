// Buscando seleção de campos do array
// Filtrar apenas os itens impares
const array = [1, 2, 3, 4, 5]; 

const novoArray = array.filter(item => item % 2 !== 0);
document.body.innerText = JSON.stringify(novoArray); // mostra retorno na tela 
// console.log(novoArray); // mostra retorno no console 

// filter( ) -> filta um array
// filter(), diferente do map() não pode alterar os valores, ele só filtra, pega um pedaço do array
// OBS: filter() retorna parte do array, dado se a condição passada retornar true ou false