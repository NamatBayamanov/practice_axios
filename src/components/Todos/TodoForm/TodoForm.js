import { useState } from "react";
import classes from "./TodoForm.module.scss";



function TodoForm({onAddTask}) {

  const [userInput, setUserInput] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onAddTask(userInput);

    setUserInput("");
  } 

  const onChange = (event) => {
    setUserInput(event.target.value);
  }

  return ( 
    <div>

      <form onSubmit={onSubmit}>
        <input type="text" value={userInput} onChange={onChange}/>
        <button>
          Send
        </button>
      </form>

    </div>
  );
}

export default TodoForm;