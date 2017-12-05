import React from 'react';
import { connect } from 'react-redux';
import CommentsListUI from '../components/CommentsListUI';
import postComment from '../actions/postComment';
import changeCommentVote from '../actions/changeCommentVote';
import deleteComment from '../actions/deleteComment';

class CommentsList extends React.Component {
  constructor(props) {
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
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

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
        deleteComment={this.handleDeleteComment}
      />
    );
  }

  handleVoteUp(event) {
    let comment_id = (!event.target.id) ? event.target.value : event.target.id;
    this.props.changeCommentVote(comment_id, 'up');
  }

  handleVoteDown(event) {
    let comment_id = (!event.target.id) ? event.target.value : event.target.id;
    this.props.changeCommentVote(comment_id, 'down');
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

  handleDeleteComment(event) {
    let comment_id = (!event.target.id) ? event.target.value : event.target.id;
    this.props.deleteComment(comment_id);
  }
}

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
    dispatch(changeCommentVote(comment_id, voteChange));
  },
  deleteComment: (comment_id) => {
    dispatch(deleteComment(comment_id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
