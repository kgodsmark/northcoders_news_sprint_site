import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import fetchTopics from '../actions/fetchTopics';

class Navbar extends Component {

    componentDidMount() {
        this.props.fetchTopics();
    }

    render() {
        const { topics, loading } = this.props;
        return (
            <div>
                <nav>
                    <NavLink to='/'>All Articles  |  </NavLink>
                    {(loading) ? <h3>Loading...</h3> : topics.map((topics, i) => (
                        <NavLink to={`/topics/${topics.slug}/articles`}>{topics.title}  |  </NavLink>
                    ))}
                </nav>
            </div>

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