import axios from "axios";

import {useNavigate} from "react-router-dom";
function ArticleCreate() {

  const navigate = useNavigate();
  const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    axios.post(
      `https://practice-axios-default-rtdb.firebaseio.com/articles.json`,
      Object.fromEntries(formData.entries())
    );
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <label>
            title:
            <input type="text" name="title" />
          </label>
        </div>

        <div>
          <label>
            Description:
            <textarea name="description" />
          </label>
        </div>
        <button>Send</button>
      </form>

      <button onClick={() => navigate("/")}>
        Come Back
      </button>
    </div>
  );
}

export default ArticleCreate;
