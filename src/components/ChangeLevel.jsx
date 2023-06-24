import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./ChangeLevel.css";

const ChangeLevel = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>FIM DO PRIMEIRO NÍVEL!</h2>
      <p>O PRÓXIMO NÍVEL SERÁ MAIS DIFÍCIL</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "START_GAME_LEVEL2" })}>PRÓXIMO NÍVEL</button>
    </div>
  );
};

export default ChangeLevel;