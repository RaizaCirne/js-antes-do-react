// Desestruturação → Serve para remover parte do objeto para uma variável a parte

const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
}

// Obter as informações do endereço dentro de uma variável 

// 1ª forma de fazer isso: 
/* 
const address = user.address
document.body.innerText = JSON.stringify(address);
*/

// 2ª forma é usando desestruturação: colocar sintaxe de chaves do lado esquerdo da operação
/*
const { address } = user;
document.body.innerText = JSON.stringify(address);
*/


// Posso pegar o adrees em uma variável e a idade em outra dando uma vírgula
/*
const { address, idade } = user;
document.body.innerText = JSON.stringify({ address, idade });
*/

// Renomeando a variável idade 
/*
const { address, idade: age } = user;
document.body.innerText = JSON.stringify({ address, age });
*/

// Setando valores default para uma variável 
// Buscar variável que não existe dentro do objeto user
const { address, idade: age, nickname = 'Fernandes' } = user;
document.body.innerText = JSON.stringify({ address, age, nickname });