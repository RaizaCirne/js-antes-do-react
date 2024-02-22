// Filtrando o array e percorrendo o array multiplicando os itens por 10  
const array = [1, 2, 3, 4, 5]; 

// concatenando métodos

const novoArray = array // pegando array original
.filter(item => item % 2 !== 0) // filtrando itens que são impares
.map(item => item * 10); // Percorrendo array retornado pelo filter() e multiplicando cada item por 10 

console.log(novoArray); // mostra retorno no console