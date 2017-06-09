// import { createSelector } from 'reselect';
//
// const getAppState = (state) => state.visibilityFilter;

import { createSelector } from 'reselect'

const getAppState = (state, props) => state.get('global');

export const makeGetAppState = () => createSelector(
  getAppState,
  (appState) => appState.get('start')
);
