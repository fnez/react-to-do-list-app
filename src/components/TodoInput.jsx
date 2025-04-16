const TodoInput = ({ setTodos, todoValue, setTodoValue }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
      <button
        onClick={() => {
          setTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
