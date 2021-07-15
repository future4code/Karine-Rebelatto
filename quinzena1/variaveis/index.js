// Interpretação de código
// Exercício 1

let a = 10  
let b = 10
console.log(b) // print vai ser 10 da b

b=5
console.log(a, b) // print vai ser 10 e 5 da a e b

// Exercício 2

let c = 10
let d = 20
let e
e = c 
d = e
c = d

console.log(c, d, e) // 10, 10, 10 pois os valores estão específicados como e= 10 e d=e

// Exercício 3

let trabalho = prompt("Quantas horas você trabalha por dia?") 
let recebe = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebe/trabalho} por hora`)

// Exercícios de escrita de código
// Exercício 1


let nome = prompt ("Qual seu nome?") // A- Declarou a variável nome 
let idade = prompt ("Qual sua idade?") // B- Declarou variável idade

console.log(typeof nome) // C- String pois representa caracteres de texto
console.log(typeof idade) // String

//let nome
//let idade

//nome = prompt ("Qual seu nome?")
//idade = prompt ("Qual sua idade?")


// Exercício 2

const primeiraResposta = prompt("Está calor hoje?")
console.log(primeiraResposta)

const segundaResposta = prompt("Já almoçou hoje?")
console.log(segundaResposta)

const terceiraResposta = prompt("Está com fome?")
console.log(terceiraResposta)

// Exercício 3

let f = 10
let g = 25
let h
f=h
g=f
h=g

console.log(f,g,h) 

