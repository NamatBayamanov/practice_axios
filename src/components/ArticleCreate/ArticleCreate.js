import axios from "axios";

function ArticleCreate() {
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
    </div>
  );
}

export default ArticleCreate;
