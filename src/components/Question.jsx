import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import { FaHome, FaVolumeUp } from "react-icons/fa";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion =
    quizState.currentLevel === 1
      ? quizState.questions.firstLevel[quizState.currentQuestion]
      : quizState.questions.secondLevel[quizState.currentQuestion];
  const synth = window.speechSynthesis;

  const handleSpeak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="question">
      <button className="home" onClick={() => dispatch({ type: "NEW_GAME" })}>
      <FaHome />
      </button>
      <p>
        <b>
          PERGUNTA {quizState.currentQuestion + 1} DE{" "}
          {quizState.currentLevel === 1
            ? quizState.questions.firstLevel.length
            : quizState.questions.secondLevel.length}
        </b>
      </p>
      <div className="question-description">
        {quizState.currentLevel === 1 ? 
        <div className="container-question">
                <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question.name }}></h2>
                <img className="image-question" src={currentQuestion.question.image}></img>
                <button onClick={() => handleSpeak(currentQuestion.question.name)}>
                <FaVolumeUp />
                </button>
        </div>
        : 
        <>
                <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></h2>
        <button onClick={() => handleSpeak(currentQuestion.question)}>
        <FaVolumeUp />
        </button></>
        }


      </div>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={quizState.currentLevel === 1 ? option.name : option}
            image={quizState.currentLevel === 1 ? option.image : ""}
            key={quizState.currentLevel === 1 ? option.name : option}
            answer={currentQuestion.answer}
            selectOption={() =>
              onSelectOption(
                quizState.currentLevel === 1 ? option.name : option
              )
            }
            hide={quizState.optionToHide.includes(option) ? "hide" : null}
          />
        ))}
      </div>
      {!quizState.answerSelected && !quizState.help && (
        <>
          {currentQuestion.tip && (
            <>
              <button onClick={() => dispatch({ type: "SHOW_TIP" })}>
                Dica
              </button>
              <button className="audio" onClick={() => handleSpeak("Dica")}>
                <FaVolumeUp />
              </button>
            </>
          )}
          <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            EXCLUIR UMA
          </button>
          <button className="audio" onClick={() => handleSpeak("Excluir uma")}>
            <FaVolumeUp />
          </button>
        </>
      )}
      {!quizState.answerSelected && quizState.help === "tip" && (
        <>
          <p>{currentQuestion.tip}</p>
          <button
            className="audio"
            onClick={() => handleSpeak(currentQuestion.tip)}
          >
            <FaVolumeUp />
          </button>
        </>
      )}
      {quizState.answerSelected && (
        <>
          <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
          </button>
          <button className="audio" onClick={() => handleSpeak("Continuar")}>
            <FaVolumeUp />
          </button>
        </>
      )}
    </div>
  );
};

export default Question;
