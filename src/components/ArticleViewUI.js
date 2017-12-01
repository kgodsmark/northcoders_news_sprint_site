import React from 'react';
import CommentsList from '../containers/CommentsList';

const ArticleViewUI = ({ loading, article, onNextPage, onPrevPage, nextPage, onVoteUp, onVoteDown }) => (
    <div>
        <button onClick={onNextPage}>Next Article</button>
        <button onClick={onPrevPage}>Previous Article</button>
        {(loading) ? <h3>Loading...</h3> : article.map((article, i) => (
            <div>
                <h3 key={`title${i}`}>{article.title}</h3>
            <p key={`body${i}`}>{article.body}</p>
            <h5 key={`created${i}`}>Author: {article.created_by}</h5>
            <p key={`votes${i}`}>Votes:{article.votes}</p>
            <button onClick={onVoteUp}>Vote up</button>
            <button onClick={onVoteDown}>Vote down</button>
            <CommentsList/>
            </div>
        ))}
    </div>
);

export default ArticleViewUI;
