// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO 01 

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a. Vai ser impresso a função 2*5 = 10 e 10*5 = 50, ou seja, o print é '10' e '50'
// b. Erro, pois o console não foi declarado

// EXERCÍCIO 02

// let textoDoUsuario = prompt("Insira um texto"); // pergunta pro usuário um texto

// const outraFuncao = function(texto) {       // chama a função
// 	return texto.toLowerCase().includes("cenoura") // return + toLowerCase() + includes especificou o valor a ser retornado em letras minúsculas e incluir a palavra 'cenoura' na array
// }

// const resposta = outraFuncao(textoDoUsuario) // chamou a função com a variável resposta 
// console.log(resposta) // imprimiu no console
// // o código vai conferir se o boolean é true ou false de acordo com a utilização da palavra cenoura, as saídas vão ser true se usada a palavra cenoura na frase.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 01
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

// function imprimirFrase() {
//     console.log("Eu sou Karine, tenho 27 anos, moro em Curitiba e sou Designer.")
//   }
  
//   imprimirFrase()

//   b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string).
//  Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// function imprimeMensagem(nome, idade, cidade, profissao) {
//     console.log(`Olá ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
//   }

//   const nome = prompt("Digite um nome")
//   const idade = prompt("Digite sua idade")
//   const cidade = prompt("Digite a cidade que você mora")
//   const profissao = prompt("Digite sua profissão")
//   imprimeMensagem(nome, idade, cidade, profissao)



//EXERCÍCIO 02

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function somaDosNumeros(num1, num2) {
//     const soma = num1 + num2
//     return soma
//   }
  
//   const resultado = somaDosNumeros(3, 7)
//   console.log(resultado)

//   //b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

//   const numero1 = 13
//   const numero2 = 15
//   console.log(numero1 >= numero2)

//   // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

//   const umafuncao = Number(prompt('Digite um número par'))
//   const restoDivisao = umafuncao % 2

//   console.log('resultado', restoDivisao)

//   // d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

  
const msg = prompt("Digite uma frase")

function msgFrase(frase) {
    console.log(frase.toUpperCase())
    console.log(frase.length)

}

msgFrase(msg)


// EXERCÍCIO 03

// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, mostre no console o resultado das operações:

function adicao(ad1,ad2){
 return ad1+ad2
}
console.log('adição:' + adicao(30,3))

function subtracao(sub1,sub2) {
    return sub1-sub2
}
console.log('subtração',  subtracao(30,3))

function multiplicacao (mult1,mult2){
    return mult1*mult2
}
console.log('multiplicação',  multiplicacao(30,3))

function divisao(divi1,divi2){
    return divi1/divi2
} 
console.log('divisão',  divisao(30,3))

