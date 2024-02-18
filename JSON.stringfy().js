const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
}

// Retorna os valores do objeto e os valores do objeto aninhado
// Retorna numa estrutura assim: 

/* 

[
  "Diego",
  27,
  {
  "street":"Rua teste",
  "number":176
  }
]

*/
document.body.innerText = JSON.stringify(Object.values(user));