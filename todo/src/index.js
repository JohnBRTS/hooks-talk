import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import useTodoState from "./hooks/useTodoState";

// const initialState = [
//   {
//     id: 1,
//     text: "Learn Hooks",
//     checked: false
//   }
// ];

const App = () => {
  // const [todos, setTodos] = useState([]);
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <ToDoForm saveTodo={todoText => addTodo(todoText)} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
