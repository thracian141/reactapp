import React, { useState } from 'react';
import Todo from './Todo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TodoList = () => {
  const [todos, setTodos] = useState([{ text: 'Sample Todo', completed: false }]);
  const [todoInput, setTodoInput] = useState('');

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() !== '') {
      setTodos([...todos, { text: todoInput, completed: false }]);
      setTodoInput('');
    }
  };

  return (
    <div className='listwrap'>
      <form onSubmit={handleNewTodo}>
        <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <TransitionGroup className='list'>
        {todos.map((todo, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <Todo
              todo={todo}
              toggleComplete={() => handleToggleComplete(index)}
              deleteTodo={() => handleDeleteTodo(index)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;