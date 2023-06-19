import { createContext, useReducer } from "react";
import questions from "../data/questions_complete";

const STAGES = ["Start", "Playing", "End", "Change Level"];

const initialState = {
  gameStage: STAGES[0],
  questions: {
    firstLevel: [],
    secondLevel: [],
  },
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  help: false,
  optionToHide: null,
  currentLevel: 1,
};

console.log(initialState);

const quizReducer = (state, action) => {
  switch (action.type) {
    case "START_GAME_LEVEL1":
      let firstLevelQuestions = questions.filter(
        (question) => question.category === "Nível 1"
      ).map(value => value.questions)[0];

      return {
        ...state,
        questions: {
          ...state.questions,
          firstLevel: firstLevelQuestions,
        },
        gameStage: STAGES[1],
      };

    case "START_GAME_LEVEL2":
      let secondLevelQuestions = questions.filter(
        (question) => question.category === "Nível 2"
      ).map(value => value.questions)[0];

      return {
        ...state,
        questions: {
          ...state.questions,
          secondLevel: secondLevelQuestions,
        },
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION": {
      let nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      let changeLevel = false;
      let stage = null;
      let isLevelTwo = false;

      if (state.currentLevel === 1) {
        if (!state.questions.firstLevel[nextQuestion]) {
          changeLevel = true;
        }
      }

      if (state.currentLevel === 2) {
        changeLevel = false;
        if (!state.questions.secondLevel[nextQuestion]) {
          endGame = true;
        }
      }

      if (endGame) {
        stage = STAGES[2];
      } else if (changeLevel) {
        stage = STAGES[3];
      }

      if (state.currentLevel === 2 || changeLevel === true) {
        isLevelTwo = true;
      }

      return {
        ...state,
        currentQuestion: changeLevel ? 0 : nextQuestion,
        currentLevel: isLevelTwo ? 2 : 1,
        gameStage: stage ? stage : state.gameStage,
        answerSelected: false,
        help: false,
      };
    }

    case "NEW_GAME": {
      return initialState;
    }

    case "CHECK_ANSWER": {
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };
    }

    case "SHOW_TIP": {
      return {
        ...state,
        help: "tip",
      };
    }

    case "REMOVE_OPTION": {
      const questionWithoutOption = state.currentLevel === 1 ? state.questions.firstLevel[state.currentQuestion] : state.questions.secondLevel[state.currentQuestion];

      let repeat = true;
      let optionToHide;

      questionWithoutOption.options.forEach((option) => {
        if (option !== questionWithoutOption.answer && repeat) {
          optionToHide = option;
          repeat = false;
        }
      });

      return {
        ...state,
        optionToHide,
        help: true,
      };
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};