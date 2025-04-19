import styled from "styled-components";
import TodoCard from "./TodoCard";

const Main = styled.ul`
  max-width: 800px;
  width: 100%;
  margin: 12px auto;
  gap: 14px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div>
      <Main>
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            index={index}
            editTodo={editTodo}
          />
        ))}
      </Main>
    </div>
  );
};

export default TodoList;
