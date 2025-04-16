import React from "react";

const TodoCard = ({ todo, deleteTodo, editTodo, index }) => {
  return (
    <li className="todoItem">
      <p>{todo}</p>
      <div className="actionsContainer">
        <button onClick={() => editTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => deleteTodo(index)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
