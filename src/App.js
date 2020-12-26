import AllPost from "./component/AllPost";
import PostForm from "./component/PostForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h1 className="center">Posts It</h1>
      </div>
      <PostForm></PostForm>
      <AllPost></AllPost>
    </div>
  );
}

export default App;
