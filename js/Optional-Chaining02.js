// Optional Chaining 

const user = {
  name: 'Diego',
  age: 27,
  // address: {
  //   street: 'Rua teste',
  //   number: 176,
  // },
}

// Se não existir o address -> Retorna um erro
document.body.innerText = user.address.street;

// Quando tento acessar a propriedade de um objeto que pode não existir, tenho que conseguir trabalhar com erros. 