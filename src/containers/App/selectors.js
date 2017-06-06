// import { createSelector } from 'reselect';
//
// const getAppState = (state) => state.visibilityFilter;

import { createSelector } from 'reselect'

const getAppState = (state, props) => state.appState;

export const makeGetAppState = () => createSelector(
  getAppState,
  (appState) => ({ start })
);
