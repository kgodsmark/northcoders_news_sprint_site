import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';

import App from './containers/App';


ReactDOM.render(
    <Provider store={store} >
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));
