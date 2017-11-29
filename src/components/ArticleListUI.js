import React from 'react';

const ArticleListUI = ({ articles, loading }) => (
    <div id='ArticleList'>
        {(loading) ? <h3>Loading...</h3> : articles.map(article => (
            <h3 key={article._id}>{article.title}</h3>
        ))}
    </div>
);

export default ArticleListUI;