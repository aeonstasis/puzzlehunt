/* @flow */

// Import Actions
import type { AppAction } from './AppActions';

type AppState = {};

// Initial State
const initialState: AppState = {};

export default function AppReducer(
  state: AppState = initialState,
  action: AppAction,
): AppState {
  switch (action.type) {
    default:
      return state;
  }
}
