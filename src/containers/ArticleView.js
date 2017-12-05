import React from 'react';
import { connect } from 'react-redux';
import fetchArticle from '../actions/fetchArticle';
import fetchComments from '../actions/fetchComments';
import fetchArticles from '../actions/fetchArticles';
import changeArticleVote from '../actions/changeArticleVote';
import ArticleViewUI from '../components/ArticleViewUI';
import findIndex from 'lodash.findindex';
import queryString from 'query-string';

class ArticleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
    this.handleVoteUp = this.handleVoteUp.bind(this);
    this.handleVoteDown = this.handleVoteDown.bind(this);
    this.findNextPageId = this.findNextPageId.bind(this);
    this.findPrevPageId = this.findPrevPageId.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
    const parsedTopic = queryString.parse(this.props.location.search);
    this.props.fetchArticles(parsedTopic.topic);
  }

  componentWillReceiveProps(nextProps) {
    let oldId = this.props.match.params.id;
    let newId = nextProps.match.params.id;
    if (newId !== oldId) {
      this.props.fetchArticle(newId);
      this.props.fetchComments(newId);
    }
    if (this.props.article.votes !== nextProps.article.votes) this.setState();
  }

  render() {
    const { article, loading } = this.props;
    return (
      <ArticleViewUI
        loading={loading}
        article={article}
        onPrevPage={this.handlePrevPage}
        onNextPage={this.handleNextPage}
        onVoteUp={this.handleVoteUp}
        onVoteDown={this.handleVoteDown}
        nextId={this.findNextPageId()}
        prevId={this.findPrevPageId()}
        topic={(this.props.article[0]) ? this.props.article[0].belongs_to : ''} />

    );
  }

  handleVoteUp() {
    let currentArticleId = (this.props.article[0]) ? this.props.article[0]._id : '';
    this.props.changeArticleVote(currentArticleId, 'up');
  }

  handleVoteDown() {
    let currentArticleId = (this.props.article[0]) ? this.props.article[0]._id : '';
    this.props.changeArticleVote(currentArticleId, 'down');
  }
    
  findNextPageId() {
    if (this.props.article[0] && this.props.articles.length) {
      let currentArticleId = this.props.match.params.id;
      let currentArticleIndex = findIndex(this.props.articles, (item) => item._id === currentArticleId);
      return (currentArticleIndex === this.props.articles.length - 1) ? this.props.articles[0]._id : this.props.articles[currentArticleIndex + 1]._id;
    } else return 'no_id';
  }

  findPrevPageId() {
    if (this.props.article[0] && this.props.articles.length) {
      let currentArticleId = this.props.match.params.id;
      let currentArticleIndex = findIndex(this.props.articles, (item) => item._id === currentArticleId);
      return (currentArticleIndex === 0) ? this.props.articles[this.props.articles.length - 1]._id : this.props.articles[currentArticleIndex - 1]._id; 
    } else return 'no_id';
  }

  handleNextPage() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  handlePrevPage() {
    this.props.fetchArticle(this.props.match.params.id);
  }

}

const mapStateToProps = state => ({
  article: state.articleReducer.data,
  loading: state.articleReducer.loading,
  error: state.articleReducer.error,
  articles: state.articlesReducer.data
});

const mapDispatchToProps = dispatch => ({
  fetchArticle: (article_id) => {
    dispatch(fetchArticle(article_id));
  },
  fetchComments: (article_id) => {
    dispatch(fetchComments(article_id));
  },
  fetchArticles: (topic) => {
    dispatch(fetchArticles(topic));
  },
  changeArticleVote: (article_id, voteChange) => {
    dispatch(changeArticleVote(article_id, voteChange));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
