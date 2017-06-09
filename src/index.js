import 'babel-polyfill'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import {Router, Route} from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import reducer from './Reducers';
import rootSaga from './Sagas';
import {clearError} from './containers/App/actions';

// import './styles/main.css';

import App from './containers/App';
import Home from './containers/Home'
import Login from './containers/Login';
// import Register from './components/Register'
// import Dashboard from './components/Dashboard'
// import NotFound from './components/NotFound'

let logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
  predicate: (getState, action) => action.type !== 'CHANGE_FORM'
});

let sagaMiddleware = createSagaMiddleware();

// let reducer = createReducer()
// Creates the Redux store using our reducer and the logger and saga middlewares
let store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
// We run the root saga automatically
sagaMiddleware.run(rootSaga);

function checkAuth (nextState, replace) {
  let {loggedIn} = store.getState();

  store.dispatch(clearError());

  if (nextState.location.pathname !== '/dashboard') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  } else {
    // If the user is already logged in, forward them to the homepage
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  }
}


class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route component={App}>
            <Route path='/' component={Home} />
            <Route onEnter={checkAuth}>
              <Route path='/login' component={Login} />
            </Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
