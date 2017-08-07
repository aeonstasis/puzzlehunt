import React, { PropTypes } from 'react';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      Header
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
};

export default Header;
