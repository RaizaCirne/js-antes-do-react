const array = [1, 2, 3, 4, 5];

// for() -> uma das formas de percorrer um array 
for(const i of array) {
  // document.body.innerText += i; -> para mostrar na tela
  console.log(i);
}

// forEach() -> outra forma de percorrer um array 
array.forEach(item => {
  // document.body.innerText += item; -> para mostrar na tela
  console.log(item);
})

// map() -> diferença map() X forEach -> Com o map() é possível fazer um retorno de dentro do map()
// Se eu quero percorrer um array e retornar algo a partir dele, o forEach() não é bom. 
// Ex: Criar um novo array e percorrer ele e multiplicar todos os números do array por 2
