/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.header}>
        <Link className={styles.content} to={'/'}>
          <div className={styles.logo}>
            <img src="/img/logo.png" alt="" />
          </div>
        </Link>
        <div className={styles.menu}></div>
      </div>
    );
  }
}

export default Header;
