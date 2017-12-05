import React from 'react';
import CommentFormUI from './CommentFormUI';
import CommentUI from './CommentUI';

const CommentsListUI = ({ comments, onSubmit, onNameChange, username, newComment, onTextChange, onVoteUp, onVoteDown, deleteComment }) => (
  <div>

    <div className="detailBox">
      <div className="titleBox">
        <label>Comments</label>
      </div>
      <div className="actionBox">
        <ul className="commentList list-group">
          {
            comments.map((comment, i) => {
              return (
                <CommentUI 
                comment={comment}
                i={i}
                onVoteUp={onVoteUp}
                onVoteDown={onVoteDown}
                deleteComment={deleteComment}
                />
              );
            })
          }
        </ul>

        <CommentFormUI 
        onSubmit={onSubmit}
        onNameChange={onNameChange}
        username={username}
        newComment={newComment}
        onTextChange={onTextChange}
        />
      </div>
    </div>
  </div >
);

export default CommentsListUI;
