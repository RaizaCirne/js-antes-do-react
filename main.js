// Objetos

const user = {
  name: 'Diego',
  idade: 27,
  // o endereço é um objeto aninhado, ou seja, um objeto dentro do outro
  address: {
    street: 'Rua teste',
    number: 176,
  },
}

document.body.innerText = ('name' in user);