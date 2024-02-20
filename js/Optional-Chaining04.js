// Optional Chaining 

// Melhor forma de trabalhar com erros:

// 1º Verificar se o endereço existe -> user.address 
// 2º Se o endereço existir -> ? 
// 3º Mostrar o street -> user.address.street
// 4º Se não existir -> : 
// 5º Mostra -> 'Não informado' 

// document.body.innerText = user.address ? user.address.street : 'Não informado';

// EXISTE UM PROBLEMA NISSO: Se dentro de address tiveve outra informação zip, que dentro dela tem o code e dentro dela também outras informações que consigo coletar diretamente através do cep 

const user = {
  name: 'Diego',
  age: 27,
  address: {
    street: 'Rua teste',
    number: 176,
    zip: {
      code: '89168888',
      city: 'Rio do Sul'
    }
  },
}

document.body.innerText = user.address.zip.code;

// Se não existir o address dentro do user? -> Arquivo 05