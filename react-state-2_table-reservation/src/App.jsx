import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function addPerson() {
    setPeople(Math.min(30, people + 1));
  }
  function removePerson() {
    setPeople(Math.max(0, people - 1));
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={addPerson} onDelete={removePerson} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
