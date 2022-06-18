import { useState } from "react";
import classes from "./List.module.scss";


function List() {

  const [list, setList] = useState([]);

  const onAddTask = (userInput) => {
    if (userInput) {
      const newList = {
        id: Math.random().toString(36).substr(2.9),
        text: userInput,
        complete: false,
      }
    }
  }

  return ( 
    <div className={classes.List}>
    asdfasdf
    </div>
  );
}

export default List;