import React from "react";

function Todo({ todos, setTodos, todo, text }) {
  const deleteHandler = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={completeHandler} />
          <label>{text}</label>
          <button onClick={deleteHandler} className="destroy"></button>
        </div>
      </li>
    </div>
  );
}

export default Todo;
