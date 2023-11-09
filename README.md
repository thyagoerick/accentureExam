# Accenture Exam

## Problema 1 
Um posto está vendendo combustíveis com a seguinte tabela de descontos:


Álcool | Gasolina
--------- | ---------
Até 25 litros, desconto de 2% por litro | Até 25 litros, desconto de 3% por litro
Acima de 25 litros, desconto de 4% por litro | Acima de 25 litros, desconto de 5% por litro


Escreva um programa que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A para álcool e G para gasolina). Calcule e imprima o valor a ser pago pelo cliente sabendo-se que:
- O preço do litro da gasolina é R$ 5,89 e 
- O preço do litro do álcool é R$ 4,39.

**Arquivo:**
```
p1.js
```
----

## Problema 2
### Uma financeira usa o seguinte critério para conceder empréstimos:

O valor total do empréstimo deve ser até dez vezes o valor da renda mensal 
do solicitante e o valor da prestação deve ser no máximo 30% da renda mensal 
do solicitante.

Escreva um programa em JavaScript que leia a renda mensal de um solicitante, 
o valor total do empréstimo solicitado e o número de prestações que o solicitante 
deseja pagar e informe se o empréstimo pode ou não ser concedido.

**Arquivo:**
```
p2.js
```
----

## Problema 3
Escreva um programa que determine se um dado número N (digitado pelo usuário) é primo ou não.
**Arquivo:**
```
p3.js
```
--- 

## Problema 4

Uma consultoria de marketing contratou você para fazer um programa que mostre os resultados de suas pesquisas sobre a faixa etária publico. Para esta pesquisa é feita a seguinte pergunta **"Em qual das opções abaixo você se enquadra?"**
As possíveis respostas são:

    1 - Até 15 anos
    2 - De 16 a 30 anos
    3 - De 31 a 45 anos
    4 - De 46 a 60 anos
    5 - Acima de 61 anos

O programa deverá ler os valores até ser informado o valor 0, que encerra a entrada dos dados. Não deverão ser aceitos valores além dos válidos para o programa (0 a 5).

Os valores referentes a cada uma das opções devem ser armazenados num vetor.

Após os dados terem sido completamente informados, o programa deverá calcular: 

1. A quantidade de pessoas em cada faixa etária;
  
2. A percentagem de pessoas em cada faixa etária, com relação ao total de pessoas;

O formato da saída que foi dado pela empresa é o seguinte:

Faixa etária | Quantidade | %
-------- | -------- | -------- 
Até 15 anos | 1500 | 15%
De 31 a 45 anos | 3500 | 35%
De 46 a 60 anos | 3000 | 30%
Acima de 61 anos | 2000 | 20%

**Arquivo:**
```
p4.js
```
---

# Problema 5
Considere, como exemplo, o seguinte arquivo alunos.json, com o seguinte conteúdo:

~~~json
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
~~~

````
A) Qual a média de cada aluno?

B) Quem recebeu a maior e a menor nota de cada turma?

C) Turma com a melhor média.
````

**Arquivo:**
```
p5.js
```