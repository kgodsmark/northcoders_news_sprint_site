import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPageUI from '../components/UserPageUI';
import ArticleListUI from '../components/ArticleListUI';
import fetchUser from '../actions/fetchUser';
import fetchUserRepos from '../actions/fetchUserRepos';
import clearArticle from '../actions/clearArticle';
import clearArticles from '../actions/clearArticles';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // this.handleChangeUrl = this.handleChangeUrl.bind(this);
    };

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.username);
        this.props.fetchUserRepos(this.props.match.params.username);
        this.props.clearArticle();
        this.props.clearArticles();
    }

    render() {
        const { user, loading, repos } = this.props;
        return (
            <div>
                <UserPageUI
                    user={user}
                    loading={loading}
                    onChangeUrl={this.handleChangeUrl}
                />
                <ArticleListUI  
                    loading={loading} 
                    articles={repos}/>
            </div>
        );
    }
    // handleChangeUrl(event) {
    //     console.log(event.target.value)
    //     // this.props.changeCommentVote(event.target.value);
    // }
}


const mapStateToProps = (state) => {
    return {
        user: state.userReducer.data,
        loading: state.userReducer.loading,
        error: state.userReducer.error,
        repos: state.userReducer.repos,
        article: state.articleReducer.data,
        articles: state.articlesReducer.data
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (username) => {
        dispatch(fetchUser(username));
    },
    fetchUserRepos: (username) => {
        dispatch(fetchUserRepos(username));
    },
    clearArticle: () => {
        dispatch(clearArticle());
    },
    clearArticles: () => {
        dispatch(clearArticles());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);