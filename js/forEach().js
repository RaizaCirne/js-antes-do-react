// forEach() -> outra forma de percorrer um array

const array = [1, 2, 3, 4, 5]; 
 
/*
array.forEach(item => {
  // document.body.innerText += item; -> para mostrar na tela
  console.log(item);
})
*/

// Se eu quero percorrer um array e retornar algo a partir dele, o forEach() não é bom. 
// Ex: Criar um novo array e percorrer ele e multiplicar todos os números do array por 2

const novoArray = []; 

array.forEach(item => {
  novoArray.push(item * 2);
});

console.log(novoArray);