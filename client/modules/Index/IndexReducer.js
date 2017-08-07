// Import Actions
import type { IndexAction } from './IndexActions';

export type IndexState = {};

// Initial State
const initialState: IndexState = {};

export default function IndexReducer(
  state: IndexState = initialState,
  action: IndexAction,
): IndexState {
  switch (action.type) {
    default:
      return state;
  }
}
