import classes from "./ListTodo.module.scss";

function ListTodo({ currentValue, onRemove, onToggle }) {
  return (
    <div className={classes.flex}>
      <table className={classes.ListTodo}>
        <tr>
          <td>
          Firstname
          </td>
          <td>
          Lastname
          </td>
          <td>
          Grade
          </td>
        </tr>
        <tr className={ currentValue.complete ? `${classes.item_text} ${classes.strike}` : `${classes.item_text}`}  onClick={() => onToggle(currentValue.id)}>
          <td>{currentValue.text}</td>
          <td>{currentValue.text2}</td>
          <td>{currentValue.text3}</td>
        </tr>
      </table>
      <button onClick={() => onRemove(currentValue.id)} className={classes.btn}>X</button>
    </div>
  );
}

export default ListTodo;
