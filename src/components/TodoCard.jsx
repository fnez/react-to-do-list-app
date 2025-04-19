import styled from "styled-components";

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border-radius: 14px;
  background: #1e1e1e;
  border: 1px solid #333;
  font-size: 1.5em;
`;

const P = styled.li`
  flex: 1;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Button = styled.button`
  transition-duration: 200ms;
  border: 1px solid #444;
  background: #2c2c2c;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 12px;
  &:hover {
    opacity: 0.8;
  }
`;

const TodoCard = ({ todo, deleteTodo, editTodo, index }) => {
  return (
    <TodoItem>
      <P>{todo}</P>
      <ActionsContainer>
        <Button onClick={() => editTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </Button>
        <Button onClick={() => deleteTodo(index)}>
          <i className="fa-solid fa-trash-can"></i>
        </Button>
      </ActionsContainer>
    </TodoItem>
  );
};

export default TodoCard;
