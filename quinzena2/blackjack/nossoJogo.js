/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem Vindo(a) ao jogo de Blackjack!")


 
// const retorno = confirm("Quer iniciar uma nova rodada?")
// if (retorno == true)
// {
//    // mensagem = "Iniciar nova rodada"
//    console.log("Iniciar nova rodada")
// }
// else
// {
//    // mensagem = "Você cancelou a partida"
//    console.log("O jogo acabou")
// }

// const carta = comprarCarta(); 
// // Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto) 
// // imprime o texto da carta. Nesse caso: "K♦️"

// console.log(carta.valor) 
// // imprime o valor da carta (um número). Nesse caso: 10)

if(confirm("Quer iniciar uma nova rodada?")) {
   let cartaJogador1 = comprarCarta()
   let cartaJogador2 = comprarCarta()
   let cartaPC1 = comprarCarta()
   let cartaPC2 = comprarCarta()
   let pontosJogador = (cartaJogador1.valor + cartaJogador2.valor)
   let pontosPC = (cartaPC1.valor + cartaPC2.valor)

   console.log(`Jogador - cartas: ${cartaJogador1.texto} ${cartaJogador2.texto} - pontos ${pontosJogador}`)
   console.log(`Computador - cartas: ${cartaPC1.texto} ${cartaPC2.texto} - pontos ${pontosPC}`)

   if(pontosJogador === pontosPC) {
      console.log("Empate")
   }else if (pontosJogador > pontosPC){
      console.log("Jogador ganhou!")
   }else {
      console.log("Computador ganhou!")
   }

}