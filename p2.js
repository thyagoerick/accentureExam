/* NOTE: Problema 2

Uma financeira usa o seguinte critério para conceder empréstimos:

O valor total do empréstimo deve ser até dez vezes o valor da renda mensal 
do solicitante e o valor da prestação deve ser no máximo 30% da renda mensal 
do solicitante.

Escreva um programa em JavaScript que leia a renda mensal de um solicitante, 
o valor total do empréstimo solicitado e o número de prestações que o solicitante 
deseja pagar e informe se o empréstimo pode ou não ser concedido.
*/


function verificarEmprestimo(rendaMensal, valorEmprestimo, numPrestacoes) {
    // Critério 1: Valor total do empréstimo até 10 vezes a renda mensal
    const limiteEmprestimo = 10 * rendaMensal;
  
    // Critério 2: Valor da prestação não pode ultrapassar 30% da renda mensal
    const valorPrestacao = valorEmprestimo / numPrestacoes;
    const limitePrestacao = 0.3 * rendaMensal;
  
    // Verifica se atende aos critérios
    if (valorEmprestimo <= limiteEmprestimo && valorPrestacao <= limitePrestacao) {
      return "Empréstimo concedido!";
    } else {
      return "Empréstimo não pode ser concedido.";
    }
  }

  
/* SECTION: Resultados */    
  console.log(verificarEmprestimo(5000, 45000, 36)); // Empréstimo concedido!

  console.log(verificarEmprestimo(5000, 45000, 12)); // Empréstimo não pode ser concedido.

/* !SECTION */  