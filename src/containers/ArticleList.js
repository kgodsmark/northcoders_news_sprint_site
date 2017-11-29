import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchArticles from '../actions/fetchArticles';
import ArticleListUI from '../components/ArticleListUI';

class ArticleList extends Component {

    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        const { articles, loading } = this.props;
        return (
            <ArticleListUI articles={articles} loading={loading} />
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
        fetchArticles: () => {
            dispatch(fetchArticles());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
