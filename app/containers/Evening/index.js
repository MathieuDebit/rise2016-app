/**
*
* Evening
*
*/

import React from 'react';
import Header from '../Header';

import styles from './styles.css';

class Evening extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.evening}>
        <Header />
        <div className={styles.container}>
          <h2 className={styles.headerTitle}>
            Evening
          </h2>
          <p>
            Découvre un récapitulatif de la journée, le programme de la soirée
          </p>
        </div>
      </div>
    );
  }
}

export default Evening;
