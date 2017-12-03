import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchTopics from '../actions/fetchTopics';
import NavbarUI from '../components/NavbarUI';

class Navbar extends Component {

    componentDidMount() {
        this.props.fetchTopics();
    }

    render() {
        const { topics, loading } = this.props;
        return (
            <NavbarUI
                loading={loading}
                topics={topics}
            />

        );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topicsReducer.data,
        loading: state.articlesReducer.loading,
        error: state.articlesReducer.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTopics: () => {
            dispatch(fetchTopics());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);