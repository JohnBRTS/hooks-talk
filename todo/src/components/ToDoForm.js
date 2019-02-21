import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../hooks/useInputState';

const ToDoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add Todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default ToDoForm;
