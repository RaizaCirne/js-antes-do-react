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
 
// Chamando a função
// document.body.innerText = user.address?.showFullAddress();

// Se o address não existir, dá erro. 
// Se o address existir, mas a função não existir? 
document.body.innerText = user.address?.showFullAddress?.();
// interrogação e ponto na chamda da função, só vai chamar se ela existir

