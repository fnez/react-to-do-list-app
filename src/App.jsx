import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyle,
  Root,
  Header,
  StyledInput,
  StyledButton,
  Main,
  TodoItem,
  ActionsContainer,
  ToggleThemeButton,
} from "./App.styles";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [toggleMode, setToggleMode] = useState("dark");

  useEffect(() => {
    if (!localStorage) return;
    let localTodos = localStorage.getItem("todos");

    if (!localTodos) return;
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  const handleSetTheme = () => {
    const theme = toggleMode === "dark" ? "light" : "dark";
    setToggleMode(theme);
  };

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
    <ThemeProvider theme={toggleMode === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ToggleTheme toggleMode={toggleMode} handleSetTheme={handleSetTheme} />
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
    </ThemeProvider>
  );
}

export default App;
