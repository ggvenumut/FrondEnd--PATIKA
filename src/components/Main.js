import { useState, useEffect } from "react";
import Header from "./Header";
import Section from "./Section";
import SectionFooter from "./SectionFooter";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilter(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilter(todos);
        break;
    }
  };

  const getLocalStorageTodos = () => {
    let todo = JSON.parse(localStorage.getItem("todos"));
    return todo;
  };
  console.log(getLocalStorageTodos());
  return (
    <section className="todoapp">
      <Header
        setTodos={setTodos}
        todos={todos}
        input={input}
        setInput={setInput}
      />
      <Section
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
        status={status}
        filter={filter}
      />
      <SectionFooter setStatus={setStatus} />
    </section>
  );
}

export default Todo;
