import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from '../containers/App/reducer';


const routeInitialState = {
  locationBeforeTransitions: null,
};

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

export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    ...asyncReducers
  });
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
