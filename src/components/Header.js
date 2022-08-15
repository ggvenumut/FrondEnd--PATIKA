function Header({ setTodos, todos, input, setInput }) {
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      return false;
    }

    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        value: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={input}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
}

export default Header;
