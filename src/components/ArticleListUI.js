import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import ArticleListItemUI from './ArticleListItem';

const ArticleListUI = ({ articles, loading }) => (
  <div id='ArticleList'>
    <ListGroup>
      {(loading) ? <h3>Loading...</h3> : articles.map((article, i) => (
        <ArticleListItemUI 
        article={article}
        i={i} 
        />
      ))}
    </ListGroup>
  </div>
);

export default ArticleListUI;
