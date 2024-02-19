const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
}

// Reste Operator 

// Se eu desestruturo a propriedade name do usuário e quero pegar o resto: 
// usar ...rest dentro da desestruturação

const { name, idade, ...rest } = user; // retorna o resto das informações que sobraram a partir do name e da idade.
document.body.innerText = JSON.stringify(rest); // retorna um objeto contendo todas as propriedades do objeto, menos a propriedade name e idade. Ou seja, é o resto das propriedades do usuário, menos as que eu ja tirei.