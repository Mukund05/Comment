import React from "react";

function PostList({ data, filteredPostId, onPostClick }) {
  const filteredData = data.filter((user) =>
    user.postId.toString().includes(filteredPostId)
  );
  // console.log(filteredData)

  return (
    <div className="PostList">
      <h2>Posts</h2>
      <ul>
        {filteredData.map((user) => (
          <li key={user.id} onClick={() => onPostClick(user.postId)}>
            <strong>Post ID: {user.postId}</strong>
            <p>{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
