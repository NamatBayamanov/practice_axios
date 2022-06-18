import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function ArticleFull() {
  // const params = useParams();
  // console.log(params);

  const { id } = useParams();

  console.log(id);

  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://practice-axios-default-rtdb.firebaseio.com/articles/${id}.json`
      )
      .then(({ data }) => {
        return setArticle(data);
      });
  }, []);

  let outputs = "Loading...";
  if (article !== null) {
    outputs = (
      <article>
        <h2>{article.title}</h2>
        <p>{article.description}</p>

        <section>
          <Link to={`/update/` + id } >Update</Link>
        </section>
        <section>
          <Link to={`/delete/` + id } >Remove</Link>
        </section>
      </article>
    );
  }

  return <div>{outputs}</div>;
}

export default ArticleFull;
