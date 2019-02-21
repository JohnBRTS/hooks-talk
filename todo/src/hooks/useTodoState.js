import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((t, index) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
};
