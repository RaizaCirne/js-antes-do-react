// Object.values() → método pra retornar todos os valores do objeto ao invés das chaves
const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
}

// Retorna Diego,27,[object Object]
document.body.innerText = Object.values(user);

// Retonar object Object porque não conseguiu entender como ele printa esse valor em tela.
// Tática pra mostrar estruturas de dados mais complexas em tela é usar o JASON.stringfy().