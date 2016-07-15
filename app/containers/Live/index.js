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
        <div className={styles.container}>
          <h2>
            Live4
          </h2>
          <p>
            Be ready ! Reste connecté pour voir les lives de la session !
          </p>
        </div>
      </div>
    );
  }
}

export default Live;
