import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, Badge } from 'reactstrap';

const ArticleListItemUI = ({ article, i }) => (
    <div key={`div${i}`}>
        <ListGroupItem key={`list${i}`} className="justify-content-between"><Link to={`/articles/${article._id}?topic=${article.belongs_to}`}>{article.title}</Link>
            <div key={`listdiv${i}`}><span key={`created${i}`}>By <Link to={`/users/${article.created_by}`}>{article.created_by} </Link></span><Badge pill>{article.votes} votes</Badge></div></ListGroupItem>
    </div>
);

export default ArticleListItemUI;
