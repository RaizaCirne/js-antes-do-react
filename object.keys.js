// Object.keys → método pra retornar um vetor com todas as chaves do objeto

const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
}

// Retorna um vetor com todas as chaves do objeto
// Retorna nome, idade, address
document.body.innerText = Object.keys(user);