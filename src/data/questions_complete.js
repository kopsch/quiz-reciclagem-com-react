const data = [
  {
    category: "Nível 1",
    questions: [
      {
        question: { name: "QUAL A COR DA LIXEIRA PARA PAPEL?", image: "https://st2.depositphotos.com/1585301/5697/i/600/depositphotos_56972449-stock-photo-crumpled-paper-ball.jpg" },
        options: [
          { name: "VERMELHO", image: "https://i.imgur.com/MlLBoK9.png" },
          { name: "AZUL", image: "https://i.imgur.com/BLf44hH.png" },
          { name: "AMARELO", image: "https://i.imgur.com/uzwisGX.png" },
          { name: "VERDE", image: "https://i.imgur.com/5OCouRf.png" },
        ],
        answer: "AZUL",
      },
      {
        question: { name: "QUAL A COR DA LIXEIRA PARA PLÁSTICO?", image: "https://img.freepik.com/fotos-premium/garrafa-de-plastico-amassada-isolada-no-fundo-branco-com-tracado-de-recorte_293060-5144.jpg" },
        options: [
          { name: "VERMELHO", image: "https://i.imgur.com/MlLBoK9.png" },
          { name: "AZUL", image: "https://i.imgur.com/BLf44hH.png" },
          { name: "AMARELO", image: "https://i.imgur.com/uzwisGX.png" },
          { name: "VERDE", image: "https://i.imgur.com/5OCouRf.png" },
        ],
        answer: "VERMELHO",
      },
      {
        question: { name: "QUAL A COR DA LIXEIRA PARA VIDRO?", image: "https://www.nicepng.com/png/detail/297-2973543_vidro-em-png-imagens-de-vidros-png.png" },
        options: [
          { name: "VERMELHO", image: "https://i.imgur.com/MlLBoK9.png" },
          { name: "AZUL", image: "https://i.imgur.com/BLf44hH.png" },
          { name: "AMARELO", image: "https://i.imgur.com/uzwisGX.png" },
          { name: "VERDE", image: "https://i.imgur.com/5OCouRf.png" },
        ],
        answer: "VERDE",
      },
      {
        question: { name: "QUAL A COR DA LIXEIRA PARA METAL?", image: "https://img.freepik.com/fotos-gratis/parafusos-e-porcas_144627-17689.jpg" },
        options: [
          { name: "VERMELHO", image: "https://i.imgur.com/MlLBoK9.png" },
          { name: "AZUL", image: "https://i.imgur.com/BLf44hH.png" },
          { name: "AMARELO", image: "https://i.imgur.com/uzwisGX.png" },
          { name: "VERDE", image: "https://i.imgur.com/5OCouRf.png" },
        ],
        answer: "AMARELO",
      },
    ],
  },
  {
    category: "Nível 2",
    questions: [
      {
        question: "O QUE É <b>RECICLAGEM</b>?",
        options: [
          "UM PROCESSO DE TRANSFORMAÇÃO DE RESÍDUOS EM <b>NOVOS MATERIAIS</b>",
          "A <b>DISPOSIÇÃO ADEQUADA DE RESÍDUOS</b> EM ATERROS SANITÁRIOS",
          "A <b>QUEIMA DE RESÍDUOS</b> PARA GERAÇÃO DE ENERGIA",
          "O DESCARTE DE RESÍDUOS EM CORPOS D'ÁGUA",
        ],
        answer: "UM PROCESSO DE TRANSFORMAÇÃO DE RESÍDUOS EM <b>NOVOS MATERIAIS</b>",
      },
      {
        question: "QUAL DOS SEGUINTES MATERIAIS É <b>BIODEGRADÁVEL</b>?",
        options: ["PAPEL", "VIDRO", "PLÁSTICO", "METAL"],
        answer: "PAPEL",
        tip: "ESTE MATERIAL É FEITO A PARTIR DE <b>FIBRAS VEGETAIS</b>.",
      },
      {
        question: "QUAL É O OBJETIVO DA COLETA SELETIVA DE RESÍDUOS?",
        options: [
          "SEPARAR <b>RESÍDUOS RECICLÁVEIS</b> DE RESÍDUOS NÃO RECICLÁVEIS",
          "DESTINAR TODOS OS RESÍDUOS PARA ATERROS SANITÁRIOS",
          "ELIMINAR COMPLETAMENTE A PRODUÇÃO DE RESÍDUOS",
          "QUEIMAR TODOS OS RESÍDUOS PARA GERAR ENERGIA",
        ],
        answer: "SEPARAR <b>RESÍDUOS RECICLÁVEIS</b> DE RESÍDUOS NÃO RECICLÁVEIS",
      },
      {
        question: "QUAL É O IMPACTO AMBIENTAL DA RECICLAGEM?",
        options: [
          "REDUÇÃO DA QUANTIDADE DE RESÍDUOS ENVIADOS PARA <b>ATERROS SANITÁRIOS</b>",
          "<b>ECONOMIA</b> DE RECURSOS NATURAIS",
          "REDUÇÃO DA <b>POLUIÇÃO</b> DO AR E DA ÁGUA",
          "TODAS AS OPÇÕES ANTERIORES",
        ],
        answer: "TODAS AS OPÇÕES ANTERIORES",
      },
      {
        question: "QUAL DOS SEGUINTES MATERIAIS NÃO É RECICLÁVEL?",
        options: ["MATERIAL DE PAPEL", "MATERIAL DE VIDRO", "MATERIAL DE PLÁSTICO", "MATERIAL DE ISOPOR"],
        answer: "MATERIAL DE ISOPOR",
        tip: "ESTE MATERIAL É FREQUENTEMENTE UTILIZADO EM <b>EMBALAGENS DE PROTEÇÃO</b> E É CONHECIDO POR SUA TEXTURA <b>LEVE E ESPONJOSA</b>.",
      },
    ],
  },
];

export default data;