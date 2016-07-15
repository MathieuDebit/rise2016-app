/**
*
* Morning
*
*/

import React from 'react';
import Header from '../Header';

import styles from './styles.css';

class Morning extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.morning}>
        <Header />
        <div className={styles.container}>
          <h2>
            Morning
          </h2>
          <p>
            Commence bien ta journée avec de la musique, le repas et d'autres surprises !
          </p>
        </div>
      </div>
    );
  }
}

export default Morning;
