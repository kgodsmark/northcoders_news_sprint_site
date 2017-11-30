import React from 'react';
import { connect } from 'react-redux';
import CommentsListUI from '../components/CommentsListUI';
import postComment from '../actions/postComment';

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
    };

    componentWillReceiveProps(nextProps) {
        console.log('nextprops:', nextProps)
        let oldComments = this.props.comments
        let newComments = nextProps.comments
        if(newComments !== oldComments) {
            // this.props.fetchArticles(newComments); 
        }
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
            onTextChange={this.handleTextChange} />
        );
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
     }
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);