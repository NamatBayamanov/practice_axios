import { useState } from "react";
import classes from "./List.module.scss";
import ListTodo from "./ListTodo/ListTodo";
import ListTodoForm from "./ListTodoForm/ListTodoForm";

function List() {
  const [list, setList] = useState([]);

  const onAddTask = (userInput, userInput2, userInput3) => {
    if (userInput) {
      const newList = {
        id: Math.random().toString(36).substr(2.9),
        text: userInput,
        text2: userInput2,
        text3: userInput3,
        complete: false,
      };
      setList([...list, newList]);
    }
  };

  const onRemove = (id) => {
    setList([
      ...list.filter((currentValue, index, arr) => currentValue.id !== id),
    ]);
  };

  const onToggle = (id) => {
    setList([
      ...list.map((currentValue, index, arr) =>
        currentValue.id === id
          ? { ...currentValue, complete: !currentValue.complete }
          : { ...list }
      ),
    ]);
  };

  return (
    <div className={classes.List}>
      <h2>List of strings: {list.length}</h2>
      <ListTodoForm onAddTask={onAddTask} />
      {list.map((currentValue, index, arr) => {
        return (
          <ListTodo
            key={currentValue.id}
            currentValue={currentValue}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
}

export default List;
