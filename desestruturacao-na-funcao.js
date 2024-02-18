// Desestruturação pode ser utilizada dentro de funções
// A desestruturação pode ser usada em todo lugar que a gente tenha referência pra um objeto

const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
}

/*
function mostraIdade(user) {
  return user.idade;
}

document.body.innerText = mostraIdade(user);
*/


// No lugar do objeto posso colocar chaves e desestruturar o user 
// Pegando apenas a idade do usuário que estou passando como parâmetro para a função e podemos dar um return apenas na idade

function mostraIdade({ idade }) {
  return idade;
}

document.body.innerText = mostraIdade(user);