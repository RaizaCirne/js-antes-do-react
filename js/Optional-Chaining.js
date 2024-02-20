// Optional Chaining 

const user = {
  name: 'Diego',
  age: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
}

// Mostrar em tela o valor de street -> Rua teste
document.body.innerText = user.address.street;