import React, { useState } from 'react';

function TodoForm(props) {
  const obj = props;
  const { onXYZ } = obj;

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onXYZ({
      id: Math.floor(Math.random() * 999),
      text: input,
    });
    setInput('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To Do"
          value={input}
          name="todo value"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default TodoForm;
