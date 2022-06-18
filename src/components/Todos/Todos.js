import { useState } from "react";
import Todo from "./Todo/Todo";
import TodoForm from "./TodoForm/TodoForm";
import classes from "./Todos.module.scss";



function Todos() {

  const [todos, setTodos] = useState([]);

  const onAddTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2.9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem]);

      // console.log([...todos]);
    }
  }

  const onRemove = (id) => {
    setTodos([...todos.filter((currentValue, index, arr) => currentValue.id !== id)]);
  }

  const onToggle = (id) => {
    setTodos([...todos.map((currentValue, index, arr) => currentValue.id === id ? {...currentValue, complete: !currentValue.complete } : {...currentValue})])
  }


  return ( 
    <div className={classes.Todos}>
      <TodoForm onAddTask={onAddTask}/>
      {todos.map((currentValue, index, arr) => <Todo key={currentValue.id} todos={currentValue} onRemove={onRemove} onToggle={onToggle} /> )}
    </div>
  );
}

export default Todos;