// Desestruturação junto com o Reste

/*

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pegando o primeiro elemento 1 - Pegando o segundo elemento 2
// Ir mudando o índice pra cada elemento que eu queira buscar do array

const first = array[0];
const second = array[1];

document.body.innerText = JSON.stringify(first);
document.body.innerText = JSON.stringify(second);

*/


/*

// Desestruturação dentro de arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [ first, second, ...rest ] = array; 
// 1º item do array vai pra variável first, o segundo pro second e caso queira o restante ...rest
// No rest tem o restante dos números que não busquei

document.body.innerText = JSON.stringify({ first, second, rest });

*/

// Pulando um índice do array - 2 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [ first, , third, ...rest ] = array; // apaga o second e deixa só com a vírgula, sem conteúdo dentro

document.body.innerText = JSON.stringify({ first, third, rest });