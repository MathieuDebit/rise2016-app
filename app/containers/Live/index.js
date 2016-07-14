/**
*
* Live
*
*/

import React from 'react';
import Header from '../Header';

import styles from './styles.css';

class Live extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.live}>
        <Header />
        Live
      </div>
    );
  }
}

export default Live;