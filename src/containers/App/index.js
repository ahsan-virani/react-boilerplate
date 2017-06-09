import React, { Component } from 'react';
import {connect} from 'react-redux'
import {makeGetAppState} from './selectors';
import {appStart} from './actions';

class App extends Component {
  componentDidMount(){
    this.props.onAppStart(this.props.appState.start);
  }

  render() {
    return (
      <div className='wrapper'>
        
        {this.props.children}
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
