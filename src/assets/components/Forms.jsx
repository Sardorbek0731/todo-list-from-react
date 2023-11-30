/* eslint-disable react/prop-types */
import "./Forms.css";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function Forms({ newTodos, newInputVal, date }) {
  const inputVal = useRef();
  const form = useRef();

  const handleAdd = (e) => {
    e.preventDefault();

    if (inputVal.current.value.trim().length > 0) {
      const todo = {
        inputVal: inputVal.current.value,
        id: uuidv4(),
        boolean: false,
        time: date,
      };
      newTodos(todo);

      const inputValue = {
        inputVal: todo.inputVal,
        id: todo.id,
        time: date,
      };
      newInputVal(inputValue);
    }
    form.current.reset();
  };
  return (
    <>
      <form className="form" ref={form}>
        <input type="text" ref={inputVal} placeholder="Text..." />
        <button
          className="addBtn"
          onClick={(e) => {
            handleAdd(e);
          }}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Forms;
