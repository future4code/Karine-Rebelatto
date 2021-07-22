//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//EXERCÍCIO 01

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // operador ! sempre retorna o boolean oposto

// let resultado = bool1 && bool2
// console.log("a. ", resultado)  // false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // true

// console.log("d. ", typeof resultado) // tipo de variável: Boolean

// EXERCÍCIO 02  

// let primeiroNumero = prompt("Digite um numero!") // usar Number() para trabalhar com valores numéricos
// let segundoNumero = prompt("Digite outro numero!")  // variável trocada, para um resultado mais previsível usar *const*

// const soma = primeiroNumero + segundoNumero  

// console.log(soma)

// EXERCÍCIO 03

// const primeiroNumero = Number(prompt("Digite um numero!"))
// const segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log( soma )

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 01

// const suaIdade = Number(prompt("Digite sua idade"))
// const idadeBFF = Number(prompt("Idade do seu BFF"))

// console.log("Sua idade é maior que a do seu melhor amigo?", suaIdade >= idadeBFF)

// console.log("diferença de idade", suaIdade - idadeBFF)

// EXECÍCIO 02

// const numeroPar = Number(prompt("Insira um número par"))

// const restoDaDivisao = numeroPar / "2"
// console.log(restoDaDivisao / "2")  // provavelmente está errado este desenvolvimento, estou um pouco confusa do que era pra ter saído
// //console.log( numeroPar / 2)

// EXERCÍCIO 03

// const idade = Number(prompt("Insira sua idade em anos"))

// console.log( idade * 12)
// console.log( idade * 365)
// console.log( idade * 365 * 24)

// EXERCÍCIO 04

// O primeiro numero é maior que segundo? true ou false
// O primeiro numero é igual ao segundo? true ou false
// O primeiro numero é divisível pelo segundo? true ou false
// O segundo numero é divisível pelo primeiro? true ou false

// const primeiroNumero = Number(prompt("Digite um número"))
// const segundoNumero = Number(prompt("Digite mais um número"))


// console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
// console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
// console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero) // não consegui resolver essa
// console.log("O segundo numero é divisível pelo primeiro?", primeiroNumero === 0)