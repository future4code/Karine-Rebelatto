// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO 01
// a) O que vai ser impresso no console?

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])   // imprime o nome na posição 0 de elenco
// console.log(filme.elenco[filme.elenco.length - 1]) // imprime a posição 1 da array - "Virginia Cavendish" 
// console.log(filme.transmissoesHoje[2])  // imprime a segunda posição da array transmissões - canal: "Globo", horario: "14h"

// EXERCÍCIO 02
// a) O que vai ser impresso no console?

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
   // *A SINTAXE DE TRÊS PONTOS PERMITE QUE A EXPRESSÃO SEJA EXPANDIDA*
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) // imprime o nome, idade e raça para cachorro
// console.log(gato)   // imprime o nome, idade e raça para gato
// console.log(tartaruga)  // imprime o nome, idade e raça e troca a letra "a" por "o" para tartaruga

// EXERCÍCIO 03 

// a) O que vai ser impresso no console?
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
  // *PROPRIEDADE OU OBJETO ESTÁ INDEFINIDO*  


// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false // IMPRESSO FALSE
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERÍCIO 01

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
// Depois, chame a função feita no item anterior passando como argumento o novo objeto

function nickname() {
const pessoa = {
    nome: "Eduardo", 
    apelidos: ["Duda", "Duardo", "Duds"]
 }
 const novoApelido = { ...pessoa, apelidos: ["DU", "DUDU", "EDU"],
}
console.log(`Meu nome é ${novoApelido.nome}, mas pode me chamar de: ${novoApelido.apelidos}`)
}
nickname()



// EXERCÍCIO 02

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:


 const pessoaNova = {
    nome: "Jay",
    idade: 16,
    profissao: "estudante"
 }

 const outraPessoa = {
    ...pessoaNova,
    nome: "Jane",
    idade: 25,
    profissao: "jornalista"
 }
 console.log("Primeira pessoa", pessoaNova)
 console.log("Segunda pessoa", outraPessoa)





// EXERCÍCIO 03

// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string)
//  e disponibilidade (boolean - devem começar como true)
// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

// const carrinho {
// }
// const sacolao1 {
//    nome: 'Mamão',
//    disponibilidade: true

