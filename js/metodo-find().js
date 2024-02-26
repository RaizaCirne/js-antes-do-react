// find() -> Encontra o primeiro item que satisfaça aquela condição 
const array = [1, 2, 3, 4, 5, 'teste']; 

// Encontre o primeiro número par, se não tiver número par retorna undefined
const par = array.find(item => item % 2 === 0);

document.body.innerText = JSON.stringify(par);

// console.log(par); 