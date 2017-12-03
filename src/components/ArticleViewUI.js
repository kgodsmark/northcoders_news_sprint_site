import React from 'react';
import { Link } from 'react-router-dom';
import CommentsList from '../containers/CommentsList';

const ArticleViewUI = ({ loading, article, onNextPage, onPrevPage, nextPage, onVoteUp, onVoteDown, topic, nextId, prevId }) => (
    <div>


        <div className="card bg-light mb-3" style={{ maxWidth: "spacing + 'em'" }} >
            <div className="card-header">
                <Link to={`/articles/${prevId}?topic=${topic}`}><button onClick={onPrevPage} className="actionButton prevArrow"><img src="/arrow-left.svg" width="20px" alt="arrow-left" /> Previous Article</button></Link>
                <Link to={`/articles/${nextId}?topic=${topic}`}><button onClick={onNextPage} className="actionButton nextArrow">Next Article <img src="/arrow-right.svg" width="20px" alt="arrow-right" /></button></Link>

                <span class="oi oi-icon-name" title="icon name" aria-hidden="true"></span>
            </div>

            {(loading) ? <h3>Loading...</h3> : article.map((article, i) => (
                <div>
                    <div className="card-body">
                        <h4 className="card-title" key={`title${i}`}>{article.title}</h4>
                        <p className="card-text" key={`body${i}`}>{article.body}</p>
                        <h5 key={`created${i}`}>By: <Link to={`/users/${article.created_by}`}>{article.created_by}</Link></h5>
                        <div>
                            <span key={`votes${i}`}>Vote <button className="actionButton" onClick={onVoteUp}><img src="/arrow-thick-top.svg" height="20px" alt="arrow-thick-top" /> </button>{article.votes}</span>
                            <button className="actionButton" onClick={onVoteDown}><img src="/arrow-thick-bottom.svg" height="20px" alt="arrow-thick-bottom" /> </button>
                        </div>
                    </div>


                    <div>
                        <CommentsList />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ArticleViewUI;
