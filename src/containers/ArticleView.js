import React from 'react';
import { connect } from 'react-redux';
import fetchArticle from '../actions/fetchArticle';
import fetchComments from '../actions/fetchComments';
import ArticleViewUI from '../components/ArticleViewUI';

class ArticleView extends React.Component {
    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        let oldId = this.props.match.params.id;
        let newId = nextProps.match.params.id;
        if (newId !== oldId) {
            this.props.fetchArticle(newId);
        }
    }

    render() {
        const { article, loading } = this.props;
        return (
            <ArticleViewUI loading={loading} article={article} />

        );
    }
};

const mapStateToProps = state => ({
    article: state.articleReducer.data,
    loading: state.articleReducer.loading,
    error: state.articleReducer.error
});

const mapDispatchToProps = dispatch => ({
    fetchArticle: (article_id) => {
        dispatch(fetchArticle(article_id));
    },
    fetchComments: (article_id) => {
        dispatch(fetchComments(article_id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
