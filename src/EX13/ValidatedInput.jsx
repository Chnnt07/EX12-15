import React from "react";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const validate = (text) => text.trim().length >= 3;
export default function ValidatedInput({ validationFunction = validate, errorMessage = "Enter at least 3 characters" }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    setIsValid(value === "" || validationFunction(value));
  }, [value, validationFunction]);
  return <section className="exercise"><h2>4. Form Input Validation</h2><Form.Control value={value} isInvalid={!isValid} onChange={(e) => setValue(e.target.value)} placeholder="Enter at least 3 characters" />{!isValid && <p className="error-text mt-2">{errorMessage}</p>}</section>;
}
