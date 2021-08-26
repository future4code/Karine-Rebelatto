function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
    let somaPonderada = 6
    let somaNotas = ex + p1 + p2
    let media = somaNotas/somaPonderada
    let mediaPonderada
    if (media >= 9) {
      mediaPonderada = "A"
    } else if (media < 9 && media >= 7.5) {
      mediaPonderada = "B"
    } else if (media < 7.5 && media >= 6) {
      mediaPonderada = "C"
    } else {
      mediaPonderada = "D"
    }
    return mediaPonderada
  } 