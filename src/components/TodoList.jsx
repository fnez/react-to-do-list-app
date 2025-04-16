import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div>
      <ul className="main">
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            index={index}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
