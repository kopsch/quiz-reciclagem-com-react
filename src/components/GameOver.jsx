import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>FIM DE JOGO!</h2>
      <p>PARABÉNS, VOCÊ FINALIZOU O QUIZ!</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>REINICIAR</button>
    </div>
  );
};

export default GameOver;
