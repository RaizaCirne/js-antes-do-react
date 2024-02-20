const user = {
  name: 'Diego',
  age: 27,
  address: {
    street: 'Rua teste',
    number: 176,
    zip: {
      code: '89168888',
      city: 'Rio do Sul'
    },
    showFullAddress() {
      return 'ok';
    }
  },
}

// variável que vai determinar qual é a propriedade que eu quero buscar do usuário
const key = 'name';


// Quando utilizo variável pra buscar propriedade, podemos usar colchetes nos objetos 
document.body.innerText = user[key]
