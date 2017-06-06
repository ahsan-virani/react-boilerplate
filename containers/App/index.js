import React, { Component } from 'react';
import {connect} from 'react-redux'
import {makeGetAppState} from './selectors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getAppState = makeGetAppState();
  return (state, props) => getAppState(state, props);
}

export function mapDispatchToProps(dispatch) {
  return {
    onAppStart: (newState) => dispatch(appStart(newState))
  };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(App);
