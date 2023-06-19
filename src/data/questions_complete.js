const data = [
  {
    category: "Nível 1",
    questions: [
      {
        question: "Qual a cor da lixeira para papel?",
        options: [
          { name: "Vermelho", image: "https://i.imgur.com/MlLBoK9.png" },
          { name: "Azul", image: "https://i.imgur.com/BLf44hH.png" },
          { name: "Amarelo", image: "https://i.imgur.com/uzwisGX.png" },
          { name: "Verde", image: "https://i.imgur.com/5OCouRf.png" },
        ],
        answer: "Azul",
      },
      {
        question: "Qual a cor da lixeira para plástico?",
        options: [
          { name: "Vermelho", image: "https://i.imgur.com/MlLBoK9.png" },
          { name: "Azul", image: "https://i.imgur.com/BLf44hH.png" },
          { name: "Amarelo", image: "https://i.imgur.com/uzwisGX.png" },
          { name: "Verde", image: "https://i.imgur.com/5OCouRf.png" },
        ],
        answer: "Vermelho",
      },
      {
        question: "Qual a cor da lixeira para vidro?",
        options: [
          { name: "Vermelho", image: "https://i.imgur.com/MlLBoK9.png" },
          { name: "Azul", image: "https://i.imgur.com/BLf44hH.png" },
          { name: "Amarelo", image: "https://i.imgur.com/uzwisGX.png" },
          { name: "Verde", image: "https://i.imgur.com/5OCouRf.png" },
        ],
        answer: "Verde",
      },
      {
        question: "Qual a cor da lixeira para metal?",
        options: [
          { name: "Vermelho", image: "https://i.imgur.com/MlLBoK9.png" },
          { name: "Azul", image: "https://i.imgur.com/BLf44hH.png" },
          { name: "Amarelo", image: "https://i.imgur.com/uzwisGX.png" },
          { name: "Verde", image: "https://i.imgur.com/5OCouRf.png" },
        ],
        answer: "Amarelo",
      },
    ],
  },
  {
    category: "Nível 2",
    questions: [
      {
        question: "O que é reciclagem?",
        options: [
          "Um processo de transformação de resíduos em novos materiais",
          "A disposição adequada de resíduos em aterros sanitários",
          "A queima de resíduos para geração de energia",
          "O descarte de resíduos em corpos d'água",
        ],
        answer: "Um processo de transformação de resíduos em novos materiais",
      },
      {
        question: "Qual dos seguintes materiais é biodegradável?",
        options: ["Papel", "Vidro", "Plástico", "Metal"],
        answer: "Papel",
        tip: "Este material é feito a partir de fibras vegetais.",
      },
      {
        question: "Qual é o objetivo da coleta seletiva de resíduos?",
        options: [
          "Separar resíduos recicláveis de resíduos não recicláveis",
          "Destinar todos os resíduos para aterros sanitários",
          "Eliminar completamente a produção de resíduos",
          "Queimar todos os resíduos para gerar energia",
        ],
        answer: "Separar resíduos recicláveis de resíduos não recicláveis",
      },
      {
        question: "Qual é o impacto ambiental da reciclagem?",
        options: [
          "Redução da quantidade de resíduos enviados para aterros sanitários",
          "Economia de recursos naturais",
          "Redução da poluição do ar e da água",
          "Todas as opções anteriores",
        ],
        answer: "Todas as opções anteriores",
      },
      {
        question: "Qual dos seguintes materiais não é reciclável?",
        options: ["Papel", "Vidro", "Plástico", "Isopor"],
        answer: "Isopor",
        tip: "Este material é frequentemente utilizado em embalagens de proteção e é conhecido por sua textura leve e esponjosa.",
      },
    ],
  },
];

export default data;
