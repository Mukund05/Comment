import React from "react";

function CommentList({ comments }) {
  return (
    <div className="CommentList">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>Email: {comment.email}</strong>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
