import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    if (!localStorage) return;
    let localTodos = localStorage.getItem("todos");

    if (!localTodos) return;
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  const persistData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const handleSetTodos = (newTodo) => {
    if (newTodo !== "") {
      const newTodoList = [...todos, newTodo];
      persistData(newTodoList);
      setTodos(newTodoList);
    }
    return;
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter(
      (element, elementIndex) => elementIndex !== index
    );
    setTodos(newTodoList);
    persistData(newTodoList);
  };

  const handleEditTodo = (index) => {
    const valueToEdit = todos[index];
    setTodoValue(valueToEdit);
    handleDeleteTodo(index);
  };

  return (
    <>
      <h1>Todo App</h1>
      <TodoInput
        todos={todos}
        setTodos={handleSetTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        deleteTodo={handleDeleteTodo}
        editTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
