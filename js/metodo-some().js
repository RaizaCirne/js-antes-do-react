// every() -> Verifica se apenas um item satisfaz a condição

const array = [1, 2, 3, 4, 5, 'teste']; 

// Verificando se algum item do array é número -> do tipo number
const peloMenosUmItemNaoEUmNumero = array.some(item => typeof item !== 'number');
document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero); // mostra retorno na tela 

// some() e every() são dois métodos que retornam valores boleanos de maneiras diferentes