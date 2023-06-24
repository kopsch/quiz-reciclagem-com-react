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
  optionToHide: [],
  currentLevel: 1,
};


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
      let correctAnswer = 0;
    
      const questionWithoutOption =
        state.currentLevel === 1
          ? state.questions.firstLevel[state.currentQuestion]
          : state.questions.secondLevel[state.currentQuestion];
    
      const answer = action.payload.answer;
      let option = action.payload.option;
      let optionToHide = state.optionToHide.slice(); // Criar uma cópia da lista atual

      if (answer === option) correctAnswer = 1;
      if (answer !== option) {
        questionWithoutOption.options.forEach((option2) => {
          if(state.currentLevel === 1) {
            if (option === option2.name) {
              optionToHide.push(option2);
            }
          } else {
            if (option === option2) {
              optionToHide.push(option2);
            }
          }
        });

        option = false;
      }

    
      return {
        ...state,
        answerSelected: option,
        optionToHide: optionToHide,
      };
    }

    case "SHOW_TIP": {
      return {
        ...state,
        help: "tip",
      };
    }

    case "REMOVE_OPTION": {
      let repeat = true;
      let optionToHide;
      const questionWithoutOption =
        state.currentLevel === 1
          ? state.questions.firstLevel[state.currentQuestion]
          : state.questions.secondLevel[state.currentQuestion];
    
      questionWithoutOption.options.forEach((option) => {
        if (state.currentLevel === 1) {
          if (option.name !== questionWithoutOption.answer && repeat) {
            optionToHide = option;
            repeat = false;
          }
        } else {
          if (option !== questionWithoutOption.answer && repeat) {
            optionToHide = option;
            repeat = false;
          }
        }
      });

      return {
        ...state,
        optionToHide: [...state.optionToHide, optionToHide],
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