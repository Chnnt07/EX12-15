import React from "react";
import { useReducer } from "react";
import { Button } from "react-bootstrap";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": return state + 1;
    case "DECREMENT": return state - 1;
    case "RESET": return 0;
    default: return state;
  }
}
export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return <section className="exercise"><h2>1. Counter with useReducer</h2><p>Count: {count}</p><div className="stack"><Button onClick={() => dispatch({ type: "INCREMENT" })}>+</Button><Button onClick={() => dispatch({ type: "DECREMENT" })}>-</Button><Button variant="secondary" onClick={() => dispatch({ type: "RESET" })}>Reset</Button></div></section>;
}
