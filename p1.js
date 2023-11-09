/* NOTE: Problema 1
1. Um posto está vendendo combustíveis com a seguinte tabela de descontos:

Álcool	
Até 25 litros, desconto de 2% por litro
Acima de 25 litros, desconto de 4% por litro

Gasolina	
Até 25 litros, desconto de 3% por litro
Acima de 25 litros, desconto de 5% por litro

Escreva um programa que leia o número de litros vendidos e o tipo de combustível 
(codificado da seguinte forma: A para álcool e G para gasolina), 

calcule e imprima o valor a ser pago pelo cliente sabendo-se que 
    o preço do litro da gasolina é R$ 5,89 e 
    o preço do litro do álcool é R$ 4,39.
*/


function calcularValorAPagar(tipoCombustivel, litros) {
    const precoGasolina = 5.89;
    const precoAlcool = 4.39;
    
    let desconto, valorAPagar;  
    if (tipoCombustivel === 'A') {
      desconto = litros <= 25 ? 0.02 : 0.04;
      valorAPagar = litros * (precoAlcool - (precoAlcool * desconto));
    } else if (tipoCombustivel === 'G') {
      desconto = litros <= 25 ? 0.03 : 0.05;
      valorAPagar = litros * (precoGasolina - (precoGasolina * desconto));
    } else {
      return "Tipo de combustível inválido. Use 'A' para álcool ou 'G' para gasolina.";
    }
  
    return `Desconto de ${desconto*100}% | Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`;
  }
 
/* SECTION: Resultados */  
  
  // Resultado Testes - Alcool
    console.log('Resultado Testes - Alcool')      
    //litro < 25
         let testeAlcool_1 = calcularValorAPagar('A', 10);
    //"Valor a ser pago: R$ 43.02"
      console.log(testeAlcool_1);  
    //litro = 25
      let testeAlcool_2 = calcularValorAPagar('A', 25);
    //"Valor a ser pago: R$ 107.56"
      console.log(testeAlcool_2);     
    //litro > 25
      let testeAlcool_3 = calcularValorAPagar('A', 26);
    //"Valor a ser pago: R$ 107.56"
      console.log(testeAlcool_3);
  
  /*************************************************/
  
  // Resultado Testes - Gasolina
    console.log('\nResultado Testes - Gasolina')      
    //litro < 25
           let testeGasolina_1 = calcularValorAPagar('G', 10);
    //"Valor a ser pago: R$ 57.13"
        console.log(testeGasolina_1);
    //litro = 25
        let testeGasolina_2 = calcularValorAPagar('G', 25);
    //"Valor a ser pago: R$ 142.83"
        console.log(testeGasolina_2);
      
    //litro > 25
        let testeGasolina_3 = calcularValorAPagar('G', 26);
    //"Valor a ser pago: R$ 145.48"
        console.log(testeGasolina_3);

/* !SECTION: Respostas */  