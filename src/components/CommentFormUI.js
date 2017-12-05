import React from 'react';

const CommentsFormUI = ({ onSubmit, onNameChange, username, newComment, onTextChange }) => (
        <div className="commentForm">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input className="form-control" type="text"
                placeholder="Your name"
                value={username}
                onChange={onNameChange}
              />
              <textarea className="form-control commentBox"
                type="text"
                placeholder="Your comments"
                value={newComment}
                onChange={onTextChange}
              />
              <input type="submit" value="Post Comment" disabled={!newComment} />
            </div>
          </form>
        </div>
);

export default CommentsFormUI;
