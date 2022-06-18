import { useState } from "react";
import classes from "./ListTodoForm.module.scss";
import axios from "axios";


function ListTodoForm({onAddTask}) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(0);

  
  const  onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  } 
  const  onLastNameChange = (event) => {
    setLastName(event.target.value);
  } 
  const  onGradeChange = (event) => {
    setGrade(event.target.value);
  } 


  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    console.log(formData);

    axios.post("https://practice-axios-default-rtdb.firebaseio.com/todolist.json", Object.fromEntries(formData.entries()));

    onAddTask(firstName, lastName, grade);

    setFirstName("");
    setLastName("");
    setGrade(0);
  }


  return ( 
    <div className={classes.ListTodoForm}>
    
      <form onSubmit={onSubmit}>
      <input onChange={onFirstNameChange} type="text" name="first_name" value={firstName} placeholder="Your firstname"/>
      <input  onChange={onLastNameChange} value={lastName} type="text" name="last_name" placeholder="Your lastname"/>
      <input placeholder="your grade" value={grade} type="number" name="grade" min={0} max={10} onChange={onGradeChange} />
      <button>
        Add
      </button>
      </form>
      <div className={classes.flex}>
        <h2>Firstname</h2>
        <h2>Lastname</h2>
        <h2>Grade</h2>
      </div>
    </div>
  );
}

export default ListTodoForm;