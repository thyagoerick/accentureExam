/* NOTE: Problema 5
Considere, como exemplo, o seguinte arquivo alunos.json, com o seguinte conteúdo:

{
   "alunos":[
      {
         "id":0,
         "nome":"Leonardo",
         "sobrenome":"Machado",
         "notas":[9.1, 3.9, 7.8],
         "turma":"LP"
      },
      {
         "id":1,
         "nome":"Manuela",
         "sobrenome":"Souza",
         "notas":[8.7, 7.4, 9.5],
         "turma":"UD"
      },
      {
         "id":2,
         "nome":"Antonio",
         "sobrenome":"Pinheiro",
         "notas":[6.5, 7.0, 8.6],
         "turma":"GP"
      },
      {
         "id":3,
         "nome":"Laura",
         "sobrenome":"Coelho",
         "notas":[5.6, 6.5, 7.3],
         "turma":"GP"
      },
      {
         "id":4,
         "nome":"Luiz",
         "sobrenome":"Sousa",
         "notas":[7.3, 5.7, 8.7]
         "turma":"LP"
      },
      {
         "id":5,
         "nome":"Jose",
         "sobrenome":"Pereira",
         "notas":[7.5, 4.9, 7.8],
         "turma":"GP"
      },
      {
         "id":6,
         "nome":"Mauricio",
         "sobrenome":"Antunes",
         "notas":[9.8, 5.6, 7.4],
         "turma":"UD"
      },
      {
         "id":7,
         "nome":"Mariana",
         "sobrenome":"Oliveira",
         "notas":[7.2, 5.3, 9.5],
         "turma":"GP"
      },
      {
         "id":8,
         "nome":"Guilherme",
         "sobrenome":"Araujo",
         "notas":[8.1, 4.5, 6.7],
         "turma":"UD"
      },
      {
         "id":9,
         "nome":"Camila",
         "sobrenome":"Santos",
         "notas":[5.1, 3.8, 6.5],
         "turma":"LP"
      },
      {
         "id":10,
         "nome":"Paula",
         "sobrenome":"Vieira",
         "notas":[9.1, 8.9, 8.8],
         "turma":"LP"
      }
   ],
   "turma":[
      {
         "codigo":"LP",
         "nome":"Logica de Programacao"
      },
      {
         "codigo":"GP",
         "nome":"Gerenciamento de Projeto"
      },
      {
         "codigo":"UD",
         "nome":"Designer de UI/UX"
      }
   ]
}

A) Qual a média de cada aluno?

B) Quem recebeu a maior e a menor nota de cada turma? 

C) Turma com a melhor média.


*/

const alunosData = {
    "alunos":[
       {
          "id":0,
          "nome":"Leonardo",
          "sobrenome":"Machado",
          "notas":[9.1, 3.9, 7.8],
          "turma":"LP"
       },
       {
          "id":1,
          "nome":"Manuela",
          "sobrenome":"Souza",
          "notas":[8.7, 7.4, 9.5],
          "turma":"UD"
       },
       {
          "id":2,
          "nome":"Antonio",
          "sobrenome":"Pinheiro",
          "notas":[6.5, 7.0, 8.6],
          "turma":"GP"
       },
       {
          "id":3,
          "nome":"Laura",
          "sobrenome":"Coelho",
          "notas":[5.6, 6.5, 7.3],
          "turma":"GP"
       },
       {
          "id":4,
          "nome":"Luiz",
          "sobrenome":"Sousa",
          "notas":[7.3, 5.7, 8.7],
          "turma":"LP"
       },
       {
          "id":5,
          "nome":"Jose",
          "sobrenome":"Pereira",
          "notas":[7.5, 4.9, 7.8],
          "turma":"GP"
       },
       {
          "id":6,
          "nome":"Mauricio",
          "sobrenome":"Antunes",
          "notas":[9.8, 5.6, 7.4],
          "turma":"UD"
       },
       {
          "id":7,
          "nome":"Mariana",
          "sobrenome":"Oliveira",
          "notas":[7.2, 5.3, 9.5],
          "turma":"GP"
       },
       {
          "id":8,
          "nome":"Guilherme",
          "sobrenome":"Araujo",
          "notas":[8.1, 4.5, 6.7],
          "turma":"UD"
       },
       {
          "id":9,
          "nome":"Camila",
          "sobrenome":"Santos",
          "notas":[5.1, 3.8, 6.5],
          "turma":"LP"
       },
       {
          "id":10,
          "nome":"Paula",
          "sobrenome":"Vieira",
          "notas":[9.1, 8.9, 8.8],
          "turma":"LP"
       }
    ],
    "turma":[
       {
          "codigo":"LP",
          "nome":"Logica de Programacao"
       },
       {
          "codigo":"GP",
          "nome":"Gerenciamento de Projeto"
       },
       {
          "codigo":"UD",
          "nome":"Designer de UI/UX"
       }
    ]
};


//A) Qual a média de cada aluno?
console.log('A) Qual a média de cada aluno?')
/* TODO: A) Para calcular a média de cada aluno, podemos percorrer a lista de alunos e calcular a média das notas. Aqui está um exemplo em JavaScript: */
 
alunosData.alunos.forEach(aluno => {
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    console.log(`\n${aluno.nome} ${aluno.sobrenome}: Média ${media.toFixed(2)}`);
});
 
// B) Quem recebeu a maior e a menor nota de cada turma?
console.log('\n\nB) Quem recebeu a maior e a menor nota de cada turma?')
/* TODO: B) Para encontrar quem recebeu a maior e a menor nota de cada turma, podemos percorrer a lista de alunos, agrupar por turma e, para cada turma, encontrar o aluno com a maior e menor nota. Aqui está um exemplo: */
const notasPorTurma = {};

alunosData.alunos.forEach(aluno => {
  //console.log('console fora 1: ', notasPorTurma);
  //NOTE - Para ver se uma propriedade/chave existe em um objeto JS podemos fazer !nomeObjeto[chaveDoObjeto]
  if (!notasPorTurma[aluno.turma]) {
    notasPorTurma[aluno.turma] = [];
  }
  //console.log('console fora 2: ', notasPorTurma);

  const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
  //console.log('media ', media);
  notasPorTurma[aluno.turma].push({ nome: `${aluno.nome} ${aluno.sobrenome}`, media });
  //console.log('console fora 3: ', notasPorTurma);
  //console.log('FIM CONSOLE 1 E 2\n\n')
});

for (const turmaCodigo in notasPorTurma) {
  const alunosTurma = notasPorTurma[turmaCodigo];
  const melhorAluno = alunosTurma.reduce((a, b) => (a.media > b.media ? a : b));
  const piorAluno = alunosTurma.reduce((a, b) => (a.media < b.media ? a : b));

  console.log(`\nTurma ${turmaCodigo}:`);
  console.log(`Melhor aluno: ${melhorAluno.nome} - Média ${melhorAluno.media.toFixed(2)}`);
  console.log(`Pior aluno: ${piorAluno.nome} - Média ${piorAluno.media.toFixed(2)}`);
}

//C) Turma com a melhor média.
console.log('\n\nC) Turma com a melhor média.')
/* TODO: C) Para encontrar a turma com a melhor média, podemos calcular a média de cada turma e depois encontrar a turma com a maior média. Aqui está um exemplo:*/

const mediasPorTurma = {};

alunosData.alunos.forEach(aluno => {
  if (!mediasPorTurma[aluno.turma]) {
    mediasPorTurma[aluno.turma] = { total: 0, count: 0 };
  }

  const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
  mediasPorTurma[aluno.turma].total += media;
  mediasPorTurma[aluno.turma].count++;
});

let melhorTurma;
let melhorMedia = 0;

for (const turmaCodigo in mediasPorTurma) {
  const mediaTurma = mediasPorTurma[turmaCodigo].total / mediasPorTurma[turmaCodigo].count;

  if (mediaTurma > melhorMedia) {
    melhorTurma = turmaCodigo;
    melhorMedia = mediaTurma;
  }
}
console.log(`A turma com a melhor média é ${melhorTurma}: Média ${melhorMedia.toFixed(2)}`);


