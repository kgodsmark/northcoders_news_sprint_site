import React from 'react';
import { connect } from 'react-redux';
import CommentsListUI from '../components/CommentsListUI';

class CommentsList extends React.Component {
    render() {
        const { comments } = this.props;
        return (
            <CommentsListUI comments={comments} />
        );
    }
};

const mapStateToProps = state => ({
    comments: state.commentsReducer.data,
    loading: state.commentsReducer.loading,
    error: state.commentsReducer.error
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);