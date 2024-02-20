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

/*

document.body.innerText = user.address
? user.address.zip
  ? user.address.zip.code
  : 'Não informado'
: 'Não informado';

*/

// Quando tenho que lidar com possíveis valores de um objeto que podem ser nulos ou podem não existir, usamos o Optional Chaining, que vai transformar isso em outro código: 

document.body.innerText = user?.address?.zip?.code ?? 'Não informado'

// Coloquei um ponto de interrogação antes do ponto que acessa uma propriedade interna do objeto e em cada propriedade que pode não existir. 

// Uni o operador de Nullish Coalescing para dizer que isso não foi informado.

// Tentei acessar o address do user, mas se ele não existir, nem tenta acessar o restante.