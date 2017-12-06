import React from 'react';
import { ListGroup } from 'reactstrap';
import ArticleListItemUI from './ArticleListItem';

const ArticleListUI = ({ articles, loading }) => (
  <div id='ArticleList'>
    <ListGroup>
      {(loading) ? <h3>Loading...</h3> : articles.map((article, i) => (
        <ArticleListItemUI key={`key${i}`}
        article={article}
        i={i} 
        />
      ))}
    </ListGroup>
  </div>
);

export default ArticleListUI;
