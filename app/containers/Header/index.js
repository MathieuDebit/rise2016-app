/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import logo from './img/logo@2x.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.header}>
        <Link className={styles.content} to={'/'}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className={styles.menu}></div>
      </div>
    );
  }
}

export default Header;
