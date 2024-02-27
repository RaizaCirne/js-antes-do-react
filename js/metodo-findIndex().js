// findIndex() ->  É a mesma coisa do find(), mas ao invés de retornar o valor encontrado, retorna o índice do valor na array. 
const array = [1, 2, 3, 4, 5, 'teste']; 

// Encontre o primeiro número par, se não tiver número par retorna undefined
const par = array.findIndex(item => item % 2 === 0);

// document.body.innerText = JSON.stringify(par);

console.log(par); 