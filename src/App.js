import { Route, Routes } from "react-router-dom";
import ArticleCreate from "./components/ArticleCreate/ArticleCreate";
import ArticleDelete from "./components/ArticleList/ArticleFull/ArticleDelete/ArticleDelete";
import ArticleFull from "./components/ArticleList/ArticleFull/ArticleFull";
import ArticleUpdate from "./components/ArticleList/ArticleFull/ArticleUpdate/ArticleUpdate";
import ArticleList from "./components/ArticleList/ArticleList";
import FromFireBase from "./components/FromFireBase/FromFireBase";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import Todos from "./components/Todos/Todos";

function App() {

  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/create" element={<ArticleCreate/>} />
        <Route path="/" element={<ArticleList />} />

        <Route path="/:id" element={<ArticleFull />} />
        <Route path="/update/:id" element={<ArticleUpdate />} />

        <Route path="/delete/:id" element={<ArticleDelete/>} />

      </Routes>


        <Todos/>
        <List/>

        <FromFireBase/>
    </div>
  );
}

export default App;
