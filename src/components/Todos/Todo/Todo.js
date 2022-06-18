import classes from "./Todo.module.scss";


function Todo({todos, onRemove, onToggle}) {


  return ( 
    <div key={todos.id} className={classes.Todo}>
      <div className={ todos.complete ? `${classes.item_text} ${classes.strike}` : `${classes.item_text}`}  onClick={() => onToggle(todos.id)}>
        {todos.task}
      </div>
      <button onClick={() => onRemove(todos.id)}>
        X
      </button>
    </div>
  );
}

export default Todo;