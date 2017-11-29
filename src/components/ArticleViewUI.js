import React from 'react';
import CommentsList from '../containers/CommentsList';

const ArticleViewUI = ({ loading, article }) => (
    <div>
        {(loading) ? <h3>Loading...</h3> : article.map((article, i) => (
            <div>
                <h3 key={i}>{article.title}</h3>
            <p key={i}>{article.body}</p>
            <h1 key={i}>{article.created_by}</h1>
            <CommentsList/>
            </div>
        ))}
    </div>
);

export default ArticleViewUI;
