import React from 'react';
import { Link } from 'react-router-dom';

const ArticleListUI = ({ articles, loading }) => (
    <div id='ArticleList'>
        {(loading) ? <h3>Loading...</h3> : articles.map(article => (
            <h3 key={article._id}><Link to={`/articles/${article._id}`}>{article.title}</Link></h3>
        ))}
    </div>
);

export default ArticleListUI;