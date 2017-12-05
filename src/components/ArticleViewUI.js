import React from 'react';
import { Link } from 'react-router-dom';
import CommentsList from '../containers/CommentsList';
import ArticleUI from './ArticleUI';
import ArticleNavUI from './ArticleNavUI';

const ArticleViewUI = ({ loading, article, onNextPage, onPrevPage, onVoteUp, onVoteDown, topic, nextId, prevId }) => (
  <div>
    <div className="card bg-light mb-3" style={{ maxWidth: 'spacing + \'em\'' }} >
      <ArticleNavUI
      prevId={prevId}
      nextId={nextId}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      topic={topic} />

      {(loading) ? <h3>Loading...</h3> : article.map((article, i) => (
        <div key={`div${i}`}>
          <ArticleUI
            i={i}
            article={article}
            onVoteUp={onVoteUp}
            onVoteDown={onVoteDown} />
          <div>
            <CommentsList />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ArticleViewUI;
