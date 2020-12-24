import AllPost from "./component/AllPost";
import PostForm from "./component/PostForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Posts</h1>
      <PostForm></PostForm>
      <AllPost></AllPost>
    </div>
  );
}

export default App;
