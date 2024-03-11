import { useState } from "react";

import "./App.css";
import Form from "./components/Form.jsx";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleCreateUser(event) {
    event.preventDefault();
    const formFields = event.target.elements;
    setName(formFields.name.value);
    setEmail(formFields.email.value);
    event.target.reset();
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onSubmit={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
