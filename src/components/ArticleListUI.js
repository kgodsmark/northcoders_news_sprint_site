import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const ArticleListUI = ({ articles, loading }) => (
  <div id='ArticleList'>
    <ListGroup>
      {(loading) ? <h3>Loading...</h3> : articles.map((article, i) => (
        <div key={`div${i}`}>
          <ListGroupItem key={`list${i}`} className="justify-content-between"><Link to={`/articles/${article._id}?topic=${article.belongs_to}`}>{article.title}</Link>
            <div key={`listdiv${i}`}><span key={`created${i}`}>By {article.created_by}  </span><Badge pill>{article.votes} votes</Badge></div></ListGroupItem>
          <h3 key={article._id}></h3>          <h3 key={article._id}></h3>
        </div>
      ))}
    </ListGroup>
  </div>
);

export default ArticleListUI;
