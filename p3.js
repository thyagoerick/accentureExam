/* NOTE: Problema 3

Escreva um programa que determine se um dado número N (digitado pelo usuário) é primo ou não.
*/

function verificarPrimo(numero) {
    if (numero <= 1) {
      return "O número não é primo.";
    } else if (numero === 2) {
      return "O número é primo.";
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return "O número não é primo.";
        }
      }
      return "O número é primo.";
    }
  }
  
  
/* SECTION: Resultados */    
const numeroUsuario = parseInt(prompt("Digite um número para verificar se é primo:"));
console.log(verificarPrimo(49));
/* !SECTION */  