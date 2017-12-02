import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../css/App.css';

import ArticleList from './ArticleList';
import Navbar from './Navbar';
import ArticleView from './ArticleView';
import CommentsList from './CommentsList';
import UserPage from './UserPage';


class App extends Component {

  render() {
    return (
      <div id='App'>
        <header className="App-header">
          <img src="/logo_white.png" className="App-logo" alt="logo" />
          <h1 className="App-title">News</h1>
        </header>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ArticleList} />
          <Route exact path='/topics/:topic/articles' component={ArticleList} />
          <Route exact path='/articles/:id' component={ArticleView} />
          <Route path='/articles/:id/comments' component={CommentsList} />
          <Route path='/users/:username' component={UserPage} />
        </Switch>
      </div>

    );
  }
}


export default App;

