import React from 'react';

const CommentsListUI = ({ comments }) => (
    <div>
        {comments.map((comment, i) => {
            return (
                <div>
                    <p key={i}>{comment.body}</p>
                    <p key={i}>Created by: {comment.created_by}</p>
                    <p key={i}>Votes: {comment.votes}</p>
                </div>
            );
        })}
    </div>
);


export default CommentsListUI;