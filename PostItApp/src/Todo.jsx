import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
      <span>{todo.text}</span>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo;