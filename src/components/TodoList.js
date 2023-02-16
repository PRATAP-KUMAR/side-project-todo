import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo')));
  console.log(todos);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

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
