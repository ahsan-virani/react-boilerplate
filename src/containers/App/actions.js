import { APP_START } from './constants';

export function appStart(start) {
  return { type: APP_START, start }
}
