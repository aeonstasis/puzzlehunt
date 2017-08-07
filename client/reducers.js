/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import index from './modules/Index/IndexReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  index,
});
