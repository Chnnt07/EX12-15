import { useReducer } from "react";
import { Button, Form } from "react-bootstrap";

const initialState = {
  questions: [
    { id: 1, question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], answer: "Canberra" },
    { id: 2, question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { id: 3, question: "Which React hook manages complex state?", options: ["useRef", "useReducer", "useEffect", "useMemo"], answer: "useReducer" }
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false
};
function reducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION": return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION": {
      if (!state.selectedOption || state.showScore) return state;
      const correct = state.selectedOption === state.questions[state.currentQuestion].answer;
      const isLast = state.currentQuestion === state.questions.length - 1;
      return { ...state, score: state.score + Number(correct), currentQuestion: isLast ? state.currentQuestion : state.currentQuestion + 1, selectedOption: "", showScore: isLast };
    }
    case "RESTART_QUIZ": return { ...initialState, questions: state.questions };
    default: return state;
  }
}
export default function QuestionBank() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const question = state.questions[state.currentQuestion];
  return <section className="exercise"><h2>2. Question Bank</h2>{state.showScore ? <><h3>Your score: {state.score}/{state.questions.length}</h3><Button onClick={() => dispatch({ type: "RESTART_QUIZ" })}>Restart Quiz</Button></> : <><h3 className="h5">Question {state.currentQuestion + 1}/{state.questions.length}: {question.question}</h3>{question.options.map((option) => <Form.Check key={option} className="my-2" type="radio" name="quiz-option" label={option} checked={state.selectedOption === option} onChange={() => dispatch({ type: "SELECT_OPTION", payload: option })} />)}<Button disabled={!state.selectedOption} onClick={() => dispatch({ type: "NEXT_QUESTION" })}>{state.currentQuestion === state.questions.length - 1 ? "Finish" : "Next Question"}</Button></>}</section>;
}
