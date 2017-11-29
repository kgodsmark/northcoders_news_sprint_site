import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../css/App.css';

import ArticleList from './ArticleList';
import ArticleView from './ArticleView';

class App extends Component {
  render() {
    return (

      <div id='App'>
        <header className="App-header">
          <img src="/logo_white.png" className="App-logo" alt="logo" />
          <h1 className="App-title">News</h1>
        </header>
        <Switch>
          <Route exact path='/' component={ArticleList} />
          <Route exact path='/articles/:id' component={ArticleView} />
        </Switch>

      </div>

    );
  }
}

export default App;
