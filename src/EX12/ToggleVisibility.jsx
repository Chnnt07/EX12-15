import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ToggleVisibility() {
  const [visible, setVisible] = useState(false);
  return <section className="exercise"><h2>3. Toggle Visibility</h2><Button onClick={() => setVisible((v) => !v)}>{visible ? "Hide" : "Show"}</Button>{visible && <p className="mt-3">This text is now visible.</p>}</section>;
}
