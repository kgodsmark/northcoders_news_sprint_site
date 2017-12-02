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
    };

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
        }
        if(this.props.article.votes !== nextProps.article.votes) this.setState()
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
                id={this.findNextPageId()}
                topic={(this.props.article[0])? this.props.article[0].belongs_to : ''} />

        );
    }

    handleVoteUp() {
        let currentArticleId = (this.props.article[0])? this.props.article[0]._id : '';
        this.props.changeArticleVote(currentArticleId, 'up');
    }

    handleVoteDown() {
        let currentArticleId = (this.props.article[0])? this.props.article[0]._id : '';
        this.props.changeArticleVote(currentArticleId, 'down');
    }
    
    findNextPageId() {
        if(this.props.article[0]) {
            let currentArticleId = this.props.article[0]._id
            // let articlePosition = findIndex(this.props.articles, (item) => item._id === currentArticleId);
            let nextArticleIndex = findIndex(this.props.articles, (item) => item._id === currentArticleId)+1;
            return (nextArticleIndex === this.props.articles.length-1) ? this.props.articles[0]._id : this.props.articles[nextArticleIndex]._id;
        } else return 'no_id';
    }

    handleNextPage() {
        let currentArticleId = (this.props.article[0])? this.props.article[0]._id : '';
        let articlePosition = findIndex(this.props.articles, (o) => o._id === currentArticleId);
        articlePosition = (articlePosition === this.props.articles.length-1)? 0 : articlePosition;
        this.props.fetchArticle(this.props.articles[articlePosition+1]._id)
    }

    handlePrevPage() {
        let currentArticleId = (this.props.article[0])? this.props.article[0]._id : '';
        let articlePosition = findIndex(this.props.articles, (o) => o._id === currentArticleId);
        articlePosition = (articlePosition === 0)? this.props.articles.length-1 : articlePosition;
        this.props.fetchArticle(this.props.articles[articlePosition-1]._id)
    }

};

const mapStateToProps = state => ({
    article: state.articleReducer.data,
    loading: state.articleReducer.loading,
    error: state.articleReducer.error,
    articles: state.articlesReducer.data,
    articlesLoading: state.articlesReducer.loading
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
