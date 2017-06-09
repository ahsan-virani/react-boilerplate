// import { APP_START } from './constants';

// let initialState = fromJS({
//   start: '',
//   error: '',
//   currentlySending: false,
//   // loggedIn: auth.loggedIn()
// });
//
// function appReducer (state = initialState, action) {
//   switch (action.type) {
//     case APP_START:
//       return {...state, start: action.start};
//     default:
//       return state;
//   }
// }
//
// export default appReducer;

import {
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
} from 'constants';
import auth from '../../services/auth';

// The initial application state
let initialState = {
  formState: {
    username: '',
    password: ''
  },
  error: '',
  currentlySending: false,
  loggedIn: auth.loggedIn()
}

// Takes care of changing the application state
function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {...state, loggedIn: action.newAuthState}
    case SENDING_REQUEST:
      return {...state, currentlySending: action.sending}
    case REQUEST_ERROR:
      return {...state, error: action.error}
    case CLEAR_ERROR:
      return {...state, error: ''}
    default:
      return state
  }
}

export default reducer
