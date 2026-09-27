import { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos((old) => [...old, { id: crypto.randomUUID(), title: text.trim() }]);
    setText("");
  };
  return (
    <section className="exercise"><h2>4. Todo List</h2>
      <Form onSubmit={addTodo} className="stack mb-3">
        <Form.Control style={{ maxWidth: 300 }} value={text} onChange={(e) => setText(e.target.value)} placeholder="New task" />
        <Button type="submit">Add</Button>
      </Form>
      <ListGroup>{todos.map((todo) => <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">{todo.title}<Button variant="danger" size="sm" onClick={() => setTodos((old) => old.filter((t) => t.id !== todo.id))}>Delete</Button></ListGroup.Item>)}</ListGroup>
    </section>
  );
}
