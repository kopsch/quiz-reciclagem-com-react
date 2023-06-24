import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Recycling from "../img/recycling.svg";
import { FaVolumeUp } from "react-icons/fa";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const synth = window.speechSynthesis;

  const handleSpeak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <>
    <div id="welcome">
      <h2>SEJA BEM-VINDO(A)</h2>
      <p>CLIQUE NO BOTÃO ABAIXO PARA COMEÇAR:</p>
      <button onClick={() => dispatch({ type: "START_GAME_LEVEL1" })}>
        INICIAR
      </button>
      <button style={{ fontSize: 10, margin: '0 0 0 1rem' }} onClick={() => handleSpeak('Iniciar')}>
        <FaVolumeUp />
    </button>
      <img style={{width: '400px'}} src={Recycling} alt="Início do Quiz" />
    </div>
    <footer>
    <p>
      Desenvolvido por: Pedro Henrique Kopsch Caxambu, Eduarda Napoleão, David Mendes
    </p>
    <p>
      Professora: Eliana Claudia Mayumi Ishikawa
    </p>
    <p>
      Disciplina: Engenharia de Software
    </p>
    </footer>
    </>
  );
};

export default Welcome;
