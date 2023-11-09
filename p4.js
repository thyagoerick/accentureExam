// OBS.: Deve-se criar um arquivo .html, copiar e colar o texto abaixo em um arquivo.js e vincular o arquivo .js ao arquivo .html e rodar no navegador.
// OBS2.: uma outra opção é copiar o código e colar em: (https://www.webtoolkitonline.com/javascript-tester.html), deixar o console do navegador aberto, clicar em 'Execute' e ver em 'mensagens do usuário' o resultado final

/*NOTE: Problema 4


Uma consultoria de marketing contratou você para fazer um programa que mostre os resultados de suas pesquisas sobre a faixa etária publico. Para esta pesquisa é feita a seguinte pergunta "Em qual das opções abaixo você se enquadra? " As possíveis respostas são: 

     1- Até 15 anos

     2 - De 16 a 30 anos

     3 - De 31 a 45 anos

     4 - De 46 a 60 anos

     5 - Acima de 61 anos

O programa deverá ler os valores até ser informado o valor 0, que encerra a entrada dos dados. Não deverão ser aceitos valores além dos válidos para o programa (0 a 5).

Os valores referentes a cada uma das opções devem ser armazenados num vetor.

Após os dados terem sido completamente informados, o programa deverá calcular: 
       a) A quantidade de pessoas em cada faixa etária;

       b) A percentagem de pessoas em cada faixa etária, com relação ao total de pessoas;

O formato da saída que foi dado pela empresa é o seguinte:

Faixa etária                  Quantidade       %

Até 15 anos                      1500           15%

De 31 a 45 anos               3500           35%

De 46 a 60 anos               3000           30%

Acima de 61 anos             2000           20%

*/


const faixaEtaria = [0, 0, 0, 0, 0];

while (true) {
  const resposta = parseInt(prompt("Em qual das opções abaixo você se enquadra? (1 a 5, 0 para encerrar)\n1- Até 15 anos\n2 - De 16 a 30 anos\n3 - De 31 a 45 anos\n4 - De 46 a 60 anos\n5 - Acima de 61 anos"));
   
  if (resposta === 0) {
    break;
  }

  if (resposta >= 1 && resposta <= 5) {
    faixaEtaria[resposta - 1]++;
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}

console.log("Faixa etária\t\tQuantidade\t\t%");
let totalPessoas = 0;

for (let i = 0; i < faixaEtaria.length; i++) {
  totalPessoas += faixaEtaria[i];
}

for (let i = 0; i < faixaEtaria.length; i++) {
  const percentual = (faixaEtaria[i] / totalPessoas) * 100;
  console.log(`${i + 1 === 5 ? 'Acima de 61 anos' : `De ${i * 15 + 1} a ${i * 15 + 15} anos`}\t\t${faixaEtaria[i]}\t\t${percentual.toFixed(2)}%`);
}
