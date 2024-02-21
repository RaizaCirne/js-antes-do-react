// Se eu quero percorrer um array e retornar algo a partir dele, o forEach() não é bom. 
// Ex: Criar um novo array e percorrer ele e multiplicar todos os números do array por 2

// Com o map é possível fazer o retorno de dentro desse método 

const array = [1, 2, 3, 4, 5]; 

const novoArray = array.map(item => {
  return item * 2;
});

console.log(novoArray);

// OBS: 
// map() -> Consigo ter retorno de dentro do método pra algum elemento por fora do map conseguir obter informações de dentro dele
// IMPORTANTE: o map() sempre vai retornar um vetor, ou seja, um array do mesmo tamanho do vetor original. 
// Só usamos o map quando queremos transformar o array em uma outra informação, porém, em outro array. Só quando queremos transformar u marray em outro mudando alguma coisa dentro desses itens