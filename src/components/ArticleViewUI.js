import React from 'react';
import { Link } from 'react-router-dom';
import CommentsList from '../containers/CommentsList';

const ArticleViewUI = ({ loading, article, onNextPage, onPrevPage, nextPage, onVoteUp, onVoteDown, topic, id }) => (
    <div>
        <Link to={`/articles/${id}?topic=${topic}`}><button onClick={onNextPage}>Next Article</button></Link>
        <Link to={`/articles/${id}?topic=${topic}`}><button onClick={onPrevPage}>Previous Article</button></Link>
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
