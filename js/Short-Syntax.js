// variáveis
const name = 'Diego'; 
const age = 27;

// Criando objeto usuário contendo essas informações 
/*
const user = {
  name: name,
  age: age,
};
*/

// Criando objeto usuário contendo essas informações usando a Short Syntax 
const user = {
  name,
  age,
};

document.body.innerHTML = JSON.stringify(user);