import React from 'react';

function Todo(props) {
  const removeTodo = (id) => {
    console.log(id);
  };

  const obj = props;
  const { todos } = obj;
  return todos.map((todo) => (
    <div className="flex-row" key={todo.id}>
      <div className="something">
        {todo.text}
      </div>
      <button type="button" aria-label="close button" onClick={() => removeTodo(todo.id)}>
        CLOSE
      </button>
      <button type="button">
        EDIT
      </button>
    </div>
  ));
}

export default Todo;
