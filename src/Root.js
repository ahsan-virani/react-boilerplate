import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger';
import reducer from './reducers'
// import rootSaga from './sagas'
import {clearError} from './actions'

import App from './containers/App';


class AppRoot extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={App}>
            <Route path='/' component={Home} />
            <Route onEnter={checkAuth}>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/dashboard' component={Dashboard} />
            </Route>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
