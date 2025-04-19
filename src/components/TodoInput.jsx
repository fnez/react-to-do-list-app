import styled from "styled-components";

const Header = styled.header`
  max-width: 800px;
  width: 100%;
  margin: 12px auto;
  gap: 14px;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 14px;
  outline: none;
  width: 100%;
  background: #2c2c2c;
  color: #fff;
  border: 1px solid #444;
  padding: 14px 18px;
  @media (min-width: 640px) {
    font-size: 1.2em;
  }
`;

const Button = styled.button`
  border-radius: 14px;
  background: #2c2c2c;
  color: #fff;
  transition-duration: 200ms;
  cursor: pointer;
  border: 1px solid #444;
  padding: 14px 18px;
  &:hover {
    opacity: 0.8;
  }
  @media (min-width: 640px) {
    font-size: 1.2em;
  }
`;

const TodoInput = ({ setTodos, todoValue, setTodoValue }) => {
  const handleAdd = () => {
    setTodos(todoValue);
    setTodoValue("");
  };

  return (
    <Header>
      <Input
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
      <Button onClick={handleAdd}>Add</Button>
    </Header>
  );
};

export default TodoInput;
