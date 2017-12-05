import React from 'react';
import { Link } from 'react-router-dom';

const ArticleUI = ({ i, article, onVoteUp, onVoteDown }) => (
    <div key={`card${i}`} className="card-body">
        <h4 className="card-title" key={`title${i}`}>{article.title}</h4>
        <p className="card-text" key={`body${i}`}>{article.body}</p>
        <h5 key={`created${i}`}>By: <Link to={`/users/${article.created_by}`}>{article.created_by}</Link></h5>
        <div>
            <span key={`votes${i}`}>Vote <button className="actionButton" onClick={onVoteUp}><img src="/arrow-thick-top.svg" height="20px" alt="arrow-thick-top" /> </button>{article.votes}</span>
            <button className="actionButton" onClick={onVoteDown}><img src="/arrow-thick-bottom.svg" height="20px" alt="arrow-thick-bottom" /> </button>
        </div>
    </div>
);

export default ArticleUI;
