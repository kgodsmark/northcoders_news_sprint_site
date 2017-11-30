import React from 'react';

const CommentsListUI = ({ comments, onSubmit, onNameChange, username, newComment, onTextChange }) => (
    <div>

<form className="commentForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={username}
          onChange={onNameChange}
        />
        <input
          type="text"
          placeholder="Your comment..."
          value={newComment}
          onChange={onTextChange}
        />
        <input type="submit" value="Post Comment" />
      </form>

        {comments.map((comment, i) => {
            return (
                <div>
                    <p key={`body${i}`}>{comment.body}</p>
                    <p key={`created${i}`}>Created by: {comment.created_by}</p>
                    <p key={`votes${i}`}>Votes: {comment.votes}</p>
                </div>
            );
        })}
    </div>
);


export default CommentsListUI;