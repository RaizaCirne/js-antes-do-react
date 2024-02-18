// Object.entries( ) 
// → Retorna um vetor com vários vetores dentro e cada um dos sub-vetores dentro do vetor maior tem duas informações dentro. 1ª informação sendo a chave do objeto e a 2ª informação sendo o valor. 

const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
}

document.body.innerText = JSON.stringify(Object.entries(user));

// Retorna: 

/*

[
	[
		"name",
		"Diego"
	],
	[
		"idade",
		27
	],
	[
		"address",
		{
			"street":"Rua teste",
			"number":176
		}
	]
]

*/