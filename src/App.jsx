import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import EX12 from "./EX12/EX12";
import EX13 from "./EX13/EX13";
import EX14 from "./EX14/EX14";
import EX15 from "./EX15/EX15";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("EX12");
  const pages = { EX12: <EX12 />, EX13: <EX13 />, EX14: <EX14 />, EX15: <EX15 /> };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm">
        <Container>
          <Navbar.Brand>FER202 React Hooks</Navbar.Brand>
          <Nav activeKey={page} onSelect={setPage}>
            {Object.keys(pages).map((name) => (
              <Nav.Link key={name} eventKey={name}>{name}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
      <Container className="py-4">
        <h1>{page}</h1>
        {pages[page]}
      </Container>
    </>
  );
}
