/* eslint-disable react/prop-types */
import "./Forms.css";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function Forms({ newTodos }) {
  const inputVal = useRef();
  const form = useRef();

  const handleAdd = (e) => {
    e.preventDefault();

    const todo = {
      inputVal: inputVal.current.value,
      id: uuidv4(),
    };
    newTodos(todo);

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
