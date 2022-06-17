import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function ArticleList() {

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    axios
      .get(`https://practice-axios-default-rtdb.firebaseio.com/articles.json`)
      .then(({ data }) => {
        const newArticles = Object.keys(data).map((id) => {
          return { id: id, ...data[id] };
        });
        setArticles(newArticles);
      });
  }, []);

  let output = "Loading...";
  if (articles !== null) {
    output = articles.map((currentValue, index, arr) => {
      return (
        <li key={currentValue.id}>
          <Link to={`/` + currentValue.id}>      {currentValue.title}
          </Link>
        </li>
      );
    });
  }

  return <article className="ArticleList">{output}</article>;
}

export default ArticleList;
