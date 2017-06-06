import { CHANGE_FORM } from 'constants';

let initialState = {
  formState: {
    username: '',
    password: ''
  }
};

function loginFormReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {...state, formState: action.newFormState}
    default:
      return state
  }
}

export default loginFormReducer;
