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
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "START_GAME_LEVEL1" })}>
        Iniciar
      </button>
      <button style={{ fontSize: 10, margin: '0 0 0 1rem' }} onClick={() => handleSpeak('Iniciar')}>
        <FaVolumeUp />
    </button>
      <img style={{width: '400px'}} src={Recycling} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
