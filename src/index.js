import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import store from './service/store'

//utils
import './index.css';
import 'semantic-ui-css/semantic.min.css';

//routes
import Home from './routes/Home';
import Resource from './routes/Resource';
import Login from './routes/Login';

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <Switch>
                <Route exact path="/login" component={ Login } />
                <Route exact path="/" component={ Home } />
                <Route exact path="/home" component={ Home } />
                <Route exact path="/resource" component={ Resource } />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
