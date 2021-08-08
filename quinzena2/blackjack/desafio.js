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

console.log("Bem-Vindo(a) ao jogo de Blackjack!")

 let cartaJogador = []
 let cartaPC = []
 let cartaJogadortxt = []

 cartaJogador.push(comprarCarta(), comprarCarta())
 cartaPC.push(comprarCarta(), comprarCarta())

 while(cartaJogador[0].valor === 11 && cartaJogador[1].valor || cartaPC[0].valor === 11 && cartaPC[1].valor === 11) {
    cartaJogador = []
    cartaPC = []
    cartaJogador.push(comprarCarta(), comprarCarta())
    cartaPC.push(comprarCarta(), comprarCarta())
 }

 cartaJogadortxt.push(cartaJogador[0].texto, cartaJogador[1].texto)

 let rodada1 = confirm(`Suas cartas são: ${cartaJogadortxt}.
 A carta do Computador é ${cartaPC[0].texto},
 Deseja comprar mais uma carta?`)

//   JOGADOR

 let rodada1Soma = (cartaJogador[0].valor + cartaJogador[1].valor)

 while(rodada1Soma <= 21 && rodada1 === true) {
    cartaJogador.push(comprarCarta())
    rodada1Soma = rodada1Soma + cartaJogador.pop().valor
    rodada1 = confirm(`Suas cartas são: ${cartaJogador}.
    A carta do Computador é ${cartaPC[0].texto},
    Deseja comprar mais cartas?`)
 }


// testando aleatório
  
   //   if (cartaJogador !== cartaPC.length-1) {
        
   //       cartasJogador += 1
   //      }else {
   //       end()
   //   }
 
   //   let ganhador = -1
   //   let pontos = 0

   //   for(var i = 0; i < cartasJogador.length; i++)
   //   {
   //       if (cartaJogador[i].Points > pontos && cartaJogador[i].Points < 22)
   //       {
   //           ganhador = i
         
   //           pontos = cartaJogador[i].Points
         
