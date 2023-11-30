/* eslint-disable react/prop-types */
import "./Map.css";

function MapTodos({ todos, setTodos, handleDel, inputVal, setInputVal, date }) {
  const showEdit = (id) => {
    const booleanTodo = todos.filter((todo) => {
      return todo.id === id ? (todo.boolean = true) : todo;
    });
    setTodos(booleanTodo);
  };

  const editSaveBtn = (todo, id) => {
    const booleanTodo = todos.filter((todo) => {
      return todo.id === id ? (todo.boolean = false) : todo;
    });
    setTodos(booleanTodo);

    const filteredValue = inputVal.filter((item) => {
      return item.id === id ? (todo.inputVal = item.inputVal) : item.inputVal;
    });
    setTodos(filteredValue);
  };

  const changeInput = (inputValue, id) => {
    const filteredValue = inputVal.filter((item) => {
      return item.id === id ? (item.inputVal = inputValue) : item.inputVal;
    });
    setInputVal(filteredValue);

    const newDate = inputVal.filter((item) => {
      return item.id === id ? (item.time = date) : item.inputVal;
    });
    setTodos(newDate);
  };

  return (
    <div className="todoItems">
      {todos.map((todo, i) => {
        return (
          <div className="todoItem" key={todo.id}>
            <div className="inputOrVal">
              <h1 className={todo.boolean ? "hidden" : "value"}>
                {todo.inputVal}
              </h1>
              <input
                type="text"
                defaultValue={todo.inputVal}
                onChange={(e) => {
                  if (e.target.value.trim()) {
                    changeInput(e.target.value, todo.id);
                  } else {
                    changeInput(" ", todo.id);
                  }
                }}
                className={todo.boolean ? "editInput" : "hidden"}
              />
            </div>
            <div className="date">
              <h3 className={todo.boolean ? "hidden" : "date"}>{todo.time}</h3>
            </div>
            <button
              className={todo.boolean ? "editSaveBtn" : "hidden"}
              onClick={() => {
                if (inputVal[i].inputVal.trim()) {
                  editSaveBtn(todo, todo.id);
                }
              }}
            >
              Saqlash
            </button>
            <div className={todo.boolean ? "hidden" : "todoBtns"}>
              <div
                className="editBtn"
                onClick={() => {
                  showEdit(todo.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pen-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                </svg>
              </div>
              <div
                className="delBtn"
                onClick={() => {
                  handleDel(todo.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--solar"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path d="M3 6.386c0-.484.345-.877.771-.877h2.665c.529-.016.996-.399 1.176-.965l.03-.1l.115-.391c.07-.24.131-.45.217-.637c.338-.739.964-1.252 1.687-1.383c.184-.033.378-.033.6-.033h3.478c.223 0 .417 0 .6.033c.723.131 1.35.644 1.687 1.383c.086.187.147.396.218.637l.114.391l.03.1c.18.566.74.95 1.27.965h2.57c.427 0 .772.393.772.877s-.345.877-.771.877H3.77c-.425 0-.77-.393-.77-.877Z"></path>
                    <path
                      fillRule="evenodd"
                      d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5c-.454.5-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886Zm-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.043.713-.43.672-.864l-.5-5.263Zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.043-.713-.43-.672-.864l.5-5.263c.04-.434.409-.75.82-.707Z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MapTodos;
