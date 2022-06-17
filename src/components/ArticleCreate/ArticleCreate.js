import axios from "axios";

function ArticleCreate() {


  const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    axios.post(`https://practice-axios-default-rtdb.firebaseio.com/articles.json`, Object.fromEntries(formData.entries()))
  } 

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <input type="text" name="title" />
        </div>

        <div>
          <textarea name="description" />
        </div>
        <button>
          Send
        </button>
      </form>
    </div>
  );
}

export default ArticleCreate;
