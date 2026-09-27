import { useState } from "react";
import { Form } from "react-bootstrap";

export default function ColorSwitcher() {
  const [color, setColor] = useState("red");
  return <section className="exercise"><h2>5. Color Switcher</h2><Form.Select value={color} onChange={(e) => setColor(e.target.value)} style={{ maxWidth: 220 }}>{["red", "blue", "green", "yellow"].map((c) => <option key={c} value={c}>{c}</option>)}</Form.Select><div className="mt-3 rounded" style={{ backgroundColor: color, height: 100 }} /></section>;
}
