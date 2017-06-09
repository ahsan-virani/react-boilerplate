import { CHANGE_FORM } from './constants';

export function changeForm(newFormState) {
  return { type: CHANGE_FORM, newFormState }
}
