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
        <Header backButton />

        <div className={styles.container}>
          <h2 className={styles.headerTitle}>
            Live
          </h2>
          <p>
            Be ready! Stay tuned to see live streamings of the session!
          </p>
        </div>
      </div>
    );
  }
}

export default Live;
