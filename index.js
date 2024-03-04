const perguntas = [
    {
       pergunta: "Qual é a forma correta de escrever um comentário de linha em JavaScript?",
    respostas:[
      "// Comentário",
      "# Comentário",
      "/* Comentário */",
    ],
    correta: 1
    },
    {
      pergunta: "Qual método é usado para exibir uma caixa de diálogo de alerta em JavaScript?",
    respostas:[
      "alertBox()",
      "msgBox()",
      "alert()",
    ],
    correta: 2
    },
    {
      pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
    respostas:[
      "round()",
      "ceil()",
      "floor()",
    ],
    correta: 0 
    },
    {
       pergunta: "Como se refere a variáveis que podem ser acessadas em qualquer lugar de um programa?",
    respostas:[
      "Globais",
      "Locais",
      "Privadas",
    ],
    correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de valores e tipos"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador lógico que representa 'ou' em JavaScript?",
    respostas:[
      "&&",
      "||",
      "!",
    ],
    correta: 1 
    },
    {
     pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas:[
      "remove()",
      "pop()",
      "delete()",
    ],
    correta: 1 
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
    respostas:[
      "Arredonda um número para o inteiro mais próximo.",
      "Formata um número com um número específico de casas decimais.",
      "Retorna o valor máximo de um conjunto de números.",
    ],
    correta: 1 
    },
    {
      pergunta: "Qual é a função da declaração 'use strict' em JavaScript?",
    respostas:[
      "Ativa o modo de depuração do navegador.",
      "Força a utilização de padrões mais rígidos de codificação.",
      "Desativa todas as otimizações do interpretador JavaScript.",
    ],
    correta: 1 
    },
    {
     pergunta: "Qual é o método usado para encontrar a posição de um valor em uma string em JavaScript?",
    respostas:[
      "position()",
      "search()",
      "find()",
    ],
    correta: 1 
    },
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')


  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta

      quizItem.querySelector('dl').appendChild(dt)
    }


    quizItem.querySelector('dl dt').remove()


    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
