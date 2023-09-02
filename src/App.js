import { useState, useEffect } from "react";
import PostList from "./Component/PostList";
import CommentList from "./Component/CommentList";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [filteredPostId, setFilteredPostId] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    func();
  }, []);

  const func = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.slice(0, 100));
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Comment Viewer</h1>
      </header>
      <div className="content">
        <div className="left-side">
          <h2>Posts</h2>
          <input
            type="text"
            placeholder="Filter by postId"
            value={filteredPostId}
            onChange={(e) => setFilteredPostId(e.target.value)}
          />
          <PostList
            data={data}
            filteredPostId={filteredPostId}
            onPostClick={handlePostClick}
          />
        </div>
        <div className="right-side">
          <CommentList
            comments={data.filter(
              (comment) => comment.postId === selectedPostId
            )}
          />
        </div>
      </div>
      <footer className="footer">
        <p>Start editing to see some magic happen!</p>
      </footer>
    </div>
  );
}
