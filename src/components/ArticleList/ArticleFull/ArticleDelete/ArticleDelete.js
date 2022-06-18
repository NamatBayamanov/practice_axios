import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"

function ArticleDelete() {

  const { id } = useParams();

  console.log(id)

  const navigate = useNavigate();

  const onRemove = () => {
    axios.delete(`https://practice-axios-default-rtdb.firebaseio.com/articles/${id}.json`).then(response => navigate("/"));
  }
  return ( 
    <div>

      <h2>
        Are you sure?
      </h2>

      <button onClick={onRemove}>
        Yes
      </button>

    </div>
  );
}

export default ArticleDelete;