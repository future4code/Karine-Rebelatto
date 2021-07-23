// //EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// // EXERCÍCIO 01

// let array
// console.log('a. ', array) // Não está especificado 

// array = null
// console.log('b. ', array) // imprime nulo pois array = 'null'

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]  // 11 elementos dentro 
// console.log('c. ', array.length) // imprime '11'

// let i = 0
// console.log('d. ', array[i]) // '3'

// array[i+1] = 19   
// console.log('e. ', array) // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// const valor = array[i+6] // posição 'i' na array é o numero 3 + 6 = 9
// console.log('f. ', valor) // '9'

// // EXERCÍCIO 02

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// //Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
// // frase em maiusculo, substituição das vogais 'A' por 'I', comprimento da frase 


// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 01

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// const nome = prompt(" Digite seu nome")
// const email = prompt("Digite seu e-mail")

// console.log(" O e-mail "  + email +  " foi cadastrado com sucesso. Seja bem-vindo(a), " + email + "!" )

// EXERCÍCIO 02

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// a) Imprima na tela o array completo

// let comidas = ["Ramen", "Pizza", "Batata", "Tonkatsu", "Vatapá"]

//  console.log(comidas.toString())


// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

// const comidas = ["Ramen", "Pizza", "Batata", "Tonkatsu", "Vatapá"]



//  const comidas = ["Ramen", "Pizza",   "Batata",   "Tonkatsu", "Vatapá"]

//  console.log(`Essas são minhas comidas favoritas:
//  ${comidas[0]}
//  ${comidas[1]}
//  ${comidas[2]}
//  ${comidas[3]}
//  ${comidas[4]}`)


// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

// const minhasFavoritas = ["Ramen", "Pizza",   "Batata",   "Tonkatsu", "Vatapá"]

// let i = 0
// minhasFavoritas[i+1] = prompt("Digite sua comida favorita?")
// console.log(minhasFavoritas.toString())




// EXERCÍCIO 03 
// 3. Faça um programa, seguindo os passos:

//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

//  listaDeTarefas = []
//  listaDeTarefas[0] = prompt("Digite uma tarefa para fazer") // teste
// console.log(listaDeTarefas.toString())

//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//  const tarefa1 = prompt ("Digite uma tarefa que precise fazer no dia")
// //  console.log(tarefa1.toString())  // teste

//  const tarefa2 = prompt ("Digite outra tarefa")
// //  console.log(tarefa2.toString())  // teste

//  const tarefa3 = prompt ("Digite mais uma")

//  //     c) Imprima o array na tela
//  console.log(tarefa1.toString(), tarefa2.toString(), tarefa3.toString())


//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// const tarefaRealizada = prompt(" Escolha um número entre 0, 1 ou 2 para uma tarefa que já realizou")

// console.log(tarefaRealizada)

//     e) Remova da lista o item de índice que o usuário escolheu.


//     f) Imprima o array na tela