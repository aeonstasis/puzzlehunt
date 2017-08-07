/* @flow */

import React from 'react';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions

type Props = {
  children: Object,
};

export function App(props: Props) {
  return (
    <div>
      {typeof window === 'object' &&
        !window.devToolsExtension &&
        process.env.NODE_ENV === 'development' &&
        <DevTools />}
      <div>
        <Helmet
          title="MERN Starter - Blog App"
          titleTemplate="%s - Blog App"
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        />
        <Header />
        <div className={styles.container}>
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
