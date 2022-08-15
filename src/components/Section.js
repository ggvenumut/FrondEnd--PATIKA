import Todo from "./Todo";

function Section({ todos, setTodos, input, setInput, filter }) {
  return (
    <div>
      <section className="main">
        <ul className="todo-list">
          {filter.map((t) => (
            <Todo
              key={t.id}
              todos={todos}
              text={t.value}
              todo={t}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Section;
