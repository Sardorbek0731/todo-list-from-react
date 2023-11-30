import "./App.css";
import Forms from "./assets/components/Forms";
import Map from "./assets/components/Map";
import { useState } from "react";

function App() {
  let date = new Date();
  let time =
    date.getHours() +
    ":" +
    date.getMinutes() +
    ", " +
    date.getDate() +
    "." +
    (date.getMonth() + 1) +
    "." +
    date.getFullYear();

  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState([]);

  const newTodos = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };
  const newInputVal = (inputValue) => {
    setInputVal((prev) => {
      return [...prev, inputValue];
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

      <Forms newTodos={newTodos} newInputVal={newInputVal} date={time} />
      <Map
        todos={todos}
        setTodos={setTodos}
        handleDel={handleDel}
        inputVal={inputVal}
        setInputVal={setInputVal}
        date={time}
      />
    </>
  );
}

export default App;
