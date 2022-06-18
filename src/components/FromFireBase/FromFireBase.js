import { useEffect, useState } from "react";
import axios from "axios";
function FromFireBase() {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    axios
      .get(`https://practice-axios-default-rtdb.firebaseio.com/todolist.json`)
      .then(({ data }) => {
        const newPerson = Object.keys(data).map((id) => {
          return { id: id, ...data[id] };
        });
        setPeople(newPerson);
        console.log(newPerson);
      });
  }, [people]);

  let output = "Load...";

  if (people !== null) {
    // output = (
    //   <ul>
    //     <li>{people[0].first_name}</li>
    //     <li>{people[0].last_name}</li>
    //     <li>{people[0].grade}</li>
    //   </ul>
    // );
    output = people.map((person) => {
      return (
        <ul>
          <li key={person.id}>{person.first_name}</li>
          <li key={person.id}>{person.last_name}</li>
          <li key={person.id}>{person.grade}</li>
        </ul>
      );
    });
  }
  return <div>{output}</div>;
}

export default FromFireBase;
