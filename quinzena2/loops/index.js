// // EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// // EXERCÍCIO 01
// // **


// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)  

// // EXERCÍCIO 02
// // a) O que vai ser impresso no console? ** VAI IMPRIMIR TODOS OS NÚMEROS MAIORES DE 18 DA ARRAY**
// //b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? 
// // ** PODERIA COLOCAR NUMERO > 0 NO OF**


// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }


// // EXERCÍCIO 03
// // iMPRIME A QUALTIDADE DE LINHAS QUE O USUÁRIO COLOCAR, SE COLOCAR 4 IRÁ IMPRIMIR 4 LINHAS DE ASTERISCOS 

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 01 

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//     Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. 
//     Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

//     c) Por fim, imprima o array com os nomes dos bichinhos no console

// let usuarioPet = Number(prompt("Quantos bichinhos de estimação você tem em casa?"))

//  for(let i = 0; i < usuarioPet; i++) {
//      let arrayDosNomes = []
//      let nomePet = prompt("Digite o nome do(s) seu(s) pet(s)")
//      arrayDosNomes = nomePet
//      console.log(nomePet)
//  }

//  EXERCÍCIO 02
// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//     a) Escreva um programa que **imprime** cada um dos valores do array original.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for(let arrayNumeros of arrayOriginal) {
//     console.log(arrayNumeros)
// }


//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// for(let arrayNumeros of arrayOriginal) {
//     console.log(arrayNumeros / 10)
// }

//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

function voltaNumeroPar(arrayOriginal) {
    let numeroPar 
for(let i = 0; i < arrayOriginal.length; i++) {
    if(arrayOriginal[i] % 2 === 0) 
        numeroPar = arrayOriginal[i]
    }
return numeroPar
}
 console.log(voltaNumeroPar(arrayOriginal))


//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". 
// Depois, **imprima** este novo array.

let novaString = []
function novoArray(string) {
    for(let i = 0; i < string.length; i++) {
        const numero = string[i]
        novaString.push(`O elemento do índex ${i} é: ${numero}.`)
    }
    console.log(novaString)
}
novoArray(arrayOriginal)


//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let maior = 200
let menor = 0

function programa(valor) {
    for(let i = 0; i < valor.length; i++) {
        let numeros = valor[i];

        if(numeros > maior) {
            maior = numeros
        }
    }
}
programa(arrayOriginal)