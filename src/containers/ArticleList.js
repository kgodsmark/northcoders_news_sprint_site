import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchArticles from '../actions/fetchArticles';
import ArticleListUI from '../components/ArticleListUI';

class ArticleList extends Component {

  componentDidMount() {
    (this.props.match.params.topic) ? this.props.fetchArticles(this.props.match.params.topic) : this.props.fetchArticles();
  }

  componentWillReceiveProps(nextProps) {
    let oldTopic = this.props.match.params.topic;
    let newTopic = nextProps.match.params.topic;
    if (newTopic !== oldTopic) {
      this.props.fetchArticles(newTopic); 
    }
  }

  render() {
    const { articles, loading } = this.props;
    return (
      <div>
        <ArticleListUI 
          articles={articles} 
          loading={loading} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.data,
    loading: state.articlesReducer.loading,
    error: state.articlesReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: (topic) => {
      dispatch(fetchArticles(topic));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
