// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('4')
  const num2 = prompt('5')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Olá, bem-vindo!')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui

  const altura = prompt('Digite altura do retângulo')
  const largura = prompt('Digite largura do retângulo')

  console.log(altura*largura)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui

  const anoAtual = prompt('Digite o ano atual')
  const anoNasc = prompt('Digite o ano que nasceu')

  console.log(anoAtual-anoNasc)

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

  const peso = prompt('Seu peso')
  const altura = prompt('Sua altura')

  console.log(peso/(altura*altura))

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const seuNome = prompt("Digite seu nome")
  const suaIdade = (prompt("Digite sua idade"))
  const email = prompt("Digite seu e-mail")

  console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${email}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

  const cor1 = prompt("Digite a primera cor")
  const cor2 = prompt("Digite a segunda cor")
  const cor3 = prompt("Digite a terceira cor")

  console.log([cor1, cor2, cor3])

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  let stringUser = prompt("Digite alguma coisa")

  console.log(stringUser.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  
  const custo = Number(prompt("Digite o custo do espetáculo"))
  const valor = Number(prompt("Digite o valor de cada ingresso"))

  console.log(custo / valor)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  const string1 = prompt("Digite uma palavra")
  const string2 = prompt("Digite outra palavra")

  frase1 = string1.toLowerCase()
  frase2 = string2.toLowerCase()
  final = frase1.length === frase2.length

  console.log(final)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

  const palavra1 = prompt("Digite uma palavra")
  const palavra2 = prompt("Digite outra palavra")

  frase1 = palavra1.toLowerCase() 
  frase2 = palavra2.toLowerCase()
  final = frase1 === frase2

  console.log(final)



}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui

  let anoAtual = Number(prompt("Digite ano atual"))
  let anoNasc = Number(prompt("Digite o seu ano de nascimento"))
  let anoId = Number(prompt("Qual ano foi emitido seu RG?"))

  let idade = anoAtual - anoNasc
  let emissao = anoAtual - anoId

  let renovacao20Anos = idade <= 20 && emissao / 5 >= 1
  let renovacao50Anos = idade > 20 && idade <= 50 && emissao / 10 >= 1
  let renovacaoMais50Anos = idade > 50 && emissao / 15 > 1

  let renovacao = renovacao20Anos || renovacao50Anos || renovacaoMais50Anos

  console.log(renovacao)


}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  const ano = Number(prompt("Digite o ano que estamos"))
  // const primeiro = ano % 4 == 0
  // const segundo = ano % 100 != 0
  // const terceiro = ano % 400 == 0
  
  anoBissexto = ano % 400 === 0 === true || ano % 4 === 0 === true && ano % 100 === 0 === false 


  console.log(anoBissexto)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  const idade = prompt("Digite sua idade")
  const enMedio = prompt("Completou o ensino médio?")
  const disponibilidade = prompt("Tem disponibilidade durante os horários do curso?")

  const inscricao = idade.toLowerCase() === "sim" && enMedio.toLowerCase() === "sim" && disponibilidade.toLowerCase() === "sim"

  console.log(inscricao)

}