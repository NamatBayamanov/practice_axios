import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function ArticleUpdate() {

  const navigate = useNavigate();

  const {id} = useParams();

  console.log(id);

  const [article, setArticle] = useState({
    title: "",
    description: "",
  });


  useEffect( () => {
    axios.get(`https://practice-axios-default-rtdb.firebaseio.com/articles/${id}.json`).then(({data}) => setArticle(data));
  }, []);
  

  
  const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
  

    axios.put(
      `https://practice-axios-default-rtdb.firebaseio.com/articles/${id}.json`,
      Object.fromEntries(formData.entries())
    ).then((response) => navigate(`/${id}`));
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <label>
            title:
            <input type="text" name="title" defaultValue={article.title} />
          </label>
        </div>

        <div>
          <label>
            Description:
            <textarea name="description" defaultValue={article.description} />
          </label>
        </div>
        <button>Send</button>
      </form>
    </div>
  );
}

export default ArticleUpdate;