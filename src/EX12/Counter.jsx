import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <section className="exercise"><h2>1. Counter</h2><p>Count: {count}</p><Button onClick={() => setCount((n) => n + 1)}>Increment</Button></section>;
}
