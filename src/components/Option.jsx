import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import "./Option.css";
import { FaVolumeUp } from "react-icons/fa";

const Option = ({ option, image, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const synth = window.speechSynthesis;

  const handleSpeak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }

  return (
    <div className="option-container">
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        ${hide ? "hide" : ""}
        `}
    >
      {
        image !== '' ? <img className="picture" src={image}></img> : <p dangerouslySetInnerHTML={{ __html: option }}></p>
      }
    </div>
    <button className={`${hide ? "hide" : ""}`} onClick={() => handleSpeak(option)}>
        <FaVolumeUp />
    </button>
    </div>
  );
};

export default Option;
