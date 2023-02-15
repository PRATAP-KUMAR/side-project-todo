import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  return (
    <>
      <h2>TODO LIST PRACTICE</h2>
      <TodoForm onXYZ={addTodo} />
      <Todo todos={todos} />
    </>
  );
}

export default TodoList;
