import "./App.css";
import Forms from "./assets/components/Forms";
import Map from "./assets/components/Map";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const newTodos = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  const handleDel = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <>
      <h1 className="title">
        <span className="firstLetter">T</span>
        <i>odo - </i>
        <span className="firstLetter"> L</span>
        <i>ist</i>
      </h1>

      <h3 className="author">
        by <h2>Sardorbek Olimov</h2>
      </h3>

      <Forms newTodos={newTodos} />
      <Map todos={todos} handleDel={handleDel} />
    </>
  );
}

export default App;
