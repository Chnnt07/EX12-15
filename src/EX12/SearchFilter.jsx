import { useState } from "react";
import { Form } from "react-bootstrap";

const items = ["Apple", "Banana", "Orange", "Mango", "Grape", "Pineapple"];
export default function SearchFilter() {
  const [query, setQuery] = useState("");
  return <section className="exercise"><h2>6. Search Filter</h2><Form.Control value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search fruit" /><ul className="mt-3">{items.filter((item) => item.toLowerCase().includes(query.toLowerCase())).map((item) => <li key={item}>{item}</li>)}</ul></section>;
}
