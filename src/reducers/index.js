import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

import globalReducer from '../containers/App/reducer';
import loginReducer from '../containers/Login/reducer';


const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

const reducers = combineReducers(
  {
    route: routeReducer,
    global: globalReducer,
    loginReducer
  }
);

export default reducers;

// export default function createReducer(asyncReducers) {
//   return combineReducers({
//     route: routeReducer,
//     global: globalReducer,
//     ...asyncReducers
//   });
// }
//
// function createReducer(){
//   return combineReducers({
//     route: routeReducer,
//     global: globalReducer
//   });
// }
//
//
// export default createReducer;
