import React from 'react';
import { Link } from 'react-router-dom';

const ArticleListUI = ({ articles, loading }) => (
    <div id='ArticleList'>
        {(loading) ? <h3>Loading...</h3> : articles.map(article => (
            <div>
            <h3 key={article._id}><Link to={`/articles/${article._id}?topic=${article.belongs_to}`}>{article.title}</Link></h3>
            <span>Votes: {article.votes}</span>
            </div>
        ))}
    </div>
);

export default ArticleListUI;