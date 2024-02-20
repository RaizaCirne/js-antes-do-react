const user = {
  name: 'Diego',
  age: 27,
  // address: {
  //   street: 'Rua teste',
  //   number: 176,
  //   zip: {
  //     code: '89168888',
  //     city: 'Rio do Sul'
  //   }
  // },
}

// document.body.innerText = user.address.zip.code;

// Se não existir o address dentro do user pra fazer um if fica muito complexo 

// 1º Verificar se existe o address -> user.address
// 2º Se o endereço existir -> ? 
// 3º Colocar não informado -> : 'Não informado' 
// 4º Se o address existir-> ?
// 5º Verificar se dentro dele existe o zip ->  user.address.zip
// 6º Se existir -> ?
//7º Pegar o -> address.zip.code
// 8º Se não existir -> : 
// 9º Retornar -> 'Não informado'; 

document.body.innerText = user.address
? user.address.zip
  ? user.address.zip.code
  : 'Não informado'
: 'Não informado';

// Quando tenho que lidar com possíveis valores de um objeto que podem ser nulos ou podem não existir, usamos o Optional Chaining, que vai transformar isso em outro código -> arquivo 06 