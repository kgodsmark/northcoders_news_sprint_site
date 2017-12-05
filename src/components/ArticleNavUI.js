import React from 'react';
import { Link } from 'react-router-dom';

const ArticleNavUI = ({ onNextPage, onPrevPage, topic, prevId, nextId }) => (
    <div className="card-header">
        <Link to={`/articles/${prevId}?topic=${topic}`}><button onClick={onPrevPage} className="actionButton prevArrow"><img src="/arrow-left.svg" width="20px" alt="arrow-left" /> Previous Article</button></Link>
        <Link to={`/articles/${nextId}?topic=${topic}`}><button onClick={onNextPage} className="actionButton nextArrow">Next Article <img src="/arrow-right.svg" width="20px" alt="arrow-right" /></button></Link>
        <span className="oi oi-icon-name" title="icon name" aria-hidden="true"></span>
    </div>
);

export default ArticleNavUI;
