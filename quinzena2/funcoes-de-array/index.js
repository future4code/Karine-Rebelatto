// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO 01 
// a) O que vai ser impresso no console?
// * IMPRIME UM NOVO ARRAY/OBJETO COM AS DESCRIÇÕES DE ITEM, INDEX E ARRAY**
''
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// EXERCÍCIO 02
// a) O que vai ser impresso no console?
// * IMPRIME UM OBJETO COM OS ÍTENS APENAS*

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// EXERCÍCIO 03
//a) O que vai ser impresso no console?
// * IMPRIME UM OBJETO COM OS ÍTENS PORÉM NÃO RETORNA O "APELIDO: CHIJO"*

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 01

// a) Crie um novo array que contenha apenas o nome dos doguinhos


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


 function extrairNome(objeto){
    return objeto.nome
 }

 const arrayDeNomes = pets.map(extrairNome)

//  console.log(arrayDeNomes)

 
 // b) Crie um novo array apenas com os [cachorros salsicha]


 const salsicha = pets.filter(
    pets => pets.raca === "Salsicha" 
)

const arrayDosSalsichas = salsicha.map(extrairNome)

console.log(arrayDosSalsichas)


// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// ??????????????? E NÃO DEU

// function gerarMensagem(item) {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
//  }
 
// const poodles = pets.filter(
//     item => item.raca === "Poodle" 
    
// )

// const descontoDosPoodles = pets.map(gerarMensagem)

// console.log(descontoDosPoodles)


// EXERCÍCIO 02

// a) Crie um novo array que contenha apenas o nome de cada item

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 function extrairNome(objeto){
    return objeto.nome
 }

 const arrayDeProdutos = produtos.map(extrairNome)

 console.log(arrayDeProdutos)
 

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles


// console.log(produtos.preco - produtos.preco * 00.5) ????????????? TB NÃO DEU

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// ????????????????? NÃO DEU

// const novoArray = (produtos) => {
//     return produtos.objeto === "Bebidas" 
// }

// const arrayDasBebidas = produtos.filter(novoArray)

// console.log(arrayDasBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const produtosYpe = (produtos) => {
    return produtos.nome.includes("Ypê") 
 }

const produtosComYpe = produtos.filter(produtosYpe)

console.log(produtosComYpe)


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
//  Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// ?????????? NÃO DEU