import { Route, Routes } from "react-router-dom";
import ArticleCreate from "./components/ArticleCreate/ArticleCreate";
import ArticleFull from "./components/ArticleList/ArticleFull/ArticleFull";
import ArticleList from "./components/ArticleList/ArticleList";

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/create" element={<ArticleCreate/>} />
        <Route path="/" element={<ArticleList />} />

        <Route path="/:id" element={<ArticleFull />} />

      </Routes>

    </div>
  );
}

export default App;
