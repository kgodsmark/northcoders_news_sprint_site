import React from 'react';

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
                                <div>
                                    <li className="list-group-item">
                                        <div className="commentText">
                                            <p key={`body${i}`} className="">{comment.body}</p> <span className="date sub-text">Posted on: {new Date(comment.created_at).toDateString()}</span>
                                            <span key={`created${i}`} className="date sub-text">  By: {comment.created_by}</span>
                                            <div className="buttonsContainer">
                                                <span key={`votes${i}`}>Vote <button className="actionButton" onClick={onVoteUp} value={comment._id}><img src="/arrow-thick-top.svg" height="15px" alt="arrow-thick-top" /> </button>{comment.votes}</span>
                                                <button className="actionButton" onClick={onVoteDown} value={comment._id}><img src="/arrow-thick-bottom.svg" height="15px" alt="arrow-thick-bottom" /> </button> <button className="actionButton" onClick={deleteComment} value={comment._id}><img src="/delete.svg" height="15px" alt="delete" /> </button>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            );
                        })
                    }
                </ul>

                <div className="commentForm">
                    <form role="form" onSubmit={onSubmit}>
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
            </div>
        </div>
    </div >
);


export default CommentsListUI;