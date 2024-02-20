// Optional Chaining 

const user = {
  name: 'Diego',
  age: 27,
  // address: {
  //   street: 'Rua teste',
  //   number: 176,
  // },
}

// Melhor forma de trabalhar com erros:

// 1º Verificar se o endereço existe -> user.address 
// 2º Se o endereço existir -> ? 
// 3º Mostrar o street -> user.address.street
// 4º Se não existir -> : 
// 5º Mostra -> 'Não informado' 

document.body.innerText = user.address ? user.address.street : 'Não informado';

// EXISTE UM PROBLEMA NISSO: Verificar arquivo 04

