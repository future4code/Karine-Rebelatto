ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui
    let salario = 2000
    let salarioBruto = 2000 + (100 * qtdeCarrosVendidos) + (5/100 * valorTotalVendas)
        if (qtdeCarrosVendidos > 0){
       console.log("Salario do mes é:", salarioBruto)
       } else {
         console.log("Salario do mes é:", salario)  
       }
       return salarioBruto
     } 

calculaSalario(3, 130000)
ˋˋˋ