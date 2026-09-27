import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function ControlledInput() {
  const [text, setText] = useState("");
  return <section className="exercise"><h2>2. Controlled Input</h2><Form.Control value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" /><p className="mt-3">You typed: {text}</p></section>;
}
