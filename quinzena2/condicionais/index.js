// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO 01

// a) Explique o que o código faz. Qual o teste que ele realiza?
// b) Para que tipos de números ele imprime no console "Passou no teste"?
// c) Para que tipos de números a mensagem é "Não passou no teste"? 

// const respostaDoUsuario = prompt("Digite o número que você quer testar") // Pede um número para o usuário
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {    // se o número for divisor de 2 passa no teste
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.") // qualquer outro número com resto não passa
// }

// EXERCÍCIO 02

// a) Para que serve o código acima? *Para mostrar os valores das frutas*

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? * será 2.25*

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` 
// que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? *Imprimiria com o valor de outra fruta não especificada*

// let fruta = prompt("Escolha uma fruta") // pede ao usuário uma fruta
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5 // imprime 3.5
//     break;
//   case "Maçã":  // imprime 2.25
//     preco = 2.25
//     break;
//   case "Uva":  // imprime 0.30
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5 // imprime 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5 // para outras frutas imprime 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// EXERCÍCIO 03

// a) O que a primeira linha está fazendo? *Pedindo um número ao usuário*

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? 
// código pede um número maior que 0 para passar no teste. -10 não passa no teste pois é menor 

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// const numero = Number(prompt("Digite o primeiro número.")) // Pede um número pro usuário

// if(numero > 0) {
//   console.log("Esse número passou no teste")  // se o número for maior que 0 ele passou no teste
// 	let mensagem = "Essa mensagem é secreta!!!" 
// }

// console.log(mensagem)

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//   a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//   b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//   c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//   Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// function podeDirigir(maiorDe18) {
   

//     if(maiorDe18 > 18) {
//         console.log("Pode dirigir!")
// } else {
//     console.log("Não pode dirigir!")
//  }
// }

// const dirigir = Number(prompt("Qual a sua idade?")) 

// podeDirigir(dirigir)

// // EXERCÍCIO 02

// // Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// // Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else


// // function analisandoSeuTurno (turnos) {

// //     if (turnos === "M") {
// //         console.log("Bom Dia!")
// // } else if (turnos === "V" ) {
// //     console.log("Boa Tarde!")
// // } else  if (turnos === "N" ) {
// //     console.log("Boa Noite!")
// // } else {
// //     console.log("Digite um turno correto")
// //  }
// // }

// // const qualSeuTurno = prompt("Qual seu turno? M para Matutino, V para Vespertino e N para noturno").toUpperCase()
// // analisandoSeuTurno(qualSeuTurno)


// // EXERCÍCIO 03

// // Repita o exercício anterior, mas utilizando a estrutura de switch case agora.


// function turno1(turno) {
//     switch (turno) {
//     case "M":
//         console.log("Bom Dia!")
//         break
//    case "V":
//     console.log("Boa Tarde!")
//         break
//    case "N":
//     console.log("Boa Noite!")
//         break
//  default:
//     console.log("Digite um turno correto")
// }
// }

// const seuTurno = prompt("Qual seu turno? M para Matutino, V para Vespertino e N para noturno").toUpperCase()

// turno1(seuTurno)



// EXERCÍCIO 04

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia
// e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta
// sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

function filme(generoFantasia, ingresso15Reais) {
    if (generoFantasia && ingresso15Reais ) {
      console.log("Bom Filme!")
    } else {
      console.log("Escolha outro filme");
    }
  }
  
  const filmeUsuario = prompt("Qual o genero do filme?") === "fantasia"
  const ingresso = prompt("Quanto é o ingresso?") === "15,00"
 
  filme(filmeUsuario, ingresso)