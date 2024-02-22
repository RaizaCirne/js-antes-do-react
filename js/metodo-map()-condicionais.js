// Condicionais dentro do map()
// Verificar se o elemento é par, se for, multiplicar por 10, se não, não multiplicar. 

// Criei um novo array baseado no array anterior, mas com operações dentro ddo map que vão modificar esses itens de maneira diferente dado o valor do item em si. 

const array = [1, 2, 3, 4, 5]; 

const novoArray = array.map(item => {
  if(item % 2 === 0) {
    return item * 10;
  }
  return item; 
});

console.log(novoArray);