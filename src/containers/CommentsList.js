import React from 'react';
import { connect } from 'react-redux';
import CommentsListUI from '../components/CommentsListUI';
import postComment from '../actions/postComment';
import changeCommentVote from '../actions/changeCommentVote';

class CommentsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            newComment: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleVoteUp = this.handleVoteUp.bind(this);
        this.handleVoteDown = this.handleVoteDown.bind(this);
    };

    // componentWillReceiveProps(nextProps) {
    //     let oldComments = this.props.comments
    //     let newComments = nextProps.comments
    //     if(newComments !== oldComments) {
    //         // this.props.fetchArticles(newComments); 
    //     }
    // }

    render() {
        const { comments } = this.props;
        return (
            <CommentsListUI 
            comments={comments} 
            onSubmit={this.handleSubmit} 
            onNameChange={this.handleNameChange} 
            username={this.state.username} 
            newComment={this.state.newComment} 
            onTextChange={this.handleTextChange}
            onVoteUp={this.handleVoteUp}
            onVoteDown={this.handleVoteDown}
             />
        );
    }

    handleVoteUp(event) {
        event.preventDefault();
        let commentID = event.target.value;
        this.props.changeCommentVote(commentID, 'up');
    }

    handleVoteDown(event) {
        event.preventDefault();
        let commentID = event.target.value;
        this.props.changeCommentVote(commentID, 'down');
    }

    handleNameChange(event) {
        this.setState({
            username: event.target.value
        });        
    }

    handleTextChange(event) {
        this.setState({
            newComment: event.target.value
        });        
    }

    handleSubmit(event) {
        let article_id = (this.props.comments[0].belongs_to) ? this.props.comments[0].belongs_to : '';
        event.preventDefault();
        this.props.postComment(article_id, this.state.newComment, this.state.username);
        this.setState({
            newComment: '',
            username: ''
        });  
    }
};

const mapStateToProps = state => ({
    comments: state.commentsReducer.data,
    loading: state.commentsReducer.loading,
    error: state.commentsReducer.error
});

const mapDispatchToProps = dispatch => ({
    postComment: (article_id, body, username) => {
        dispatch(postComment(article_id, body, username));
     },
     changeCommentVote: (comment_id, voteChange) => {
         dispatch(changeCommentVote(comment_id, voteChange))
     }
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);