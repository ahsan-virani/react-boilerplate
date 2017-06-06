import { APP_START } from './constants';

let initialState = {
  start: '',
  error: '',
  currentlySending: false,
  // loggedIn: auth.loggedIn()
};

function appReducer (state = initialState, action) {
  switch (action.type) {
    case APP_START:
      return {...state, start: action.start};
    default:
      return state;
  }
}

export default appReducer;
