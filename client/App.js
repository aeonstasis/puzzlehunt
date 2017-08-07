/**
 * Root Component
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');

type Props = {
  store: Object,
};

export default function App(props: Props) {
  return (
    <Provider store={props.store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  );
}
