import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPageUI from '../components/UserPageUI';
import fetchUser from '../actions/fetchUser';

class UserPage extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.username)
    }

    // componentWillReceiveProps(nextProps) {
    //     let oldTopic = this.props.match.params.topic
    //     let newTopic = nextProps.match.params.topic
    //     if(newTopic !== oldTopic) {

    //     }
    // }

    render() {
        const { user, loading } = this.props;
        return (
            <div>
                <UserPageUI
                    user={user}
                    loading={loading}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.userReducer.data,
        loading: state.userReducer.loading,
        error: state.userReducer.error
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (username) => {
        dispatch(fetchUser(username));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);