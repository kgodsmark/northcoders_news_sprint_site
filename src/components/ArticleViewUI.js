import React from 'react';

const ArticleViewUI = ({ loading, article }) => (
    <div>
        {(loading) ? <h3>Loading...</h3> : article.map(article => (
            <div><h3 key={article._id}>{article.title}</h3>
            <p key={article._id}>{article.body}</p>
            <h1 key={article._id}>{article.created_by}</h1>
            </div>
        ))}
    </div>
);

export default ArticleViewUI;
