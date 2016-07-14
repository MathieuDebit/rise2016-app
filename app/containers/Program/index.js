/**
*
* Program
*
*/

import React from 'react';
import Header from '../Header';

import styles from './styles.css';

class Program extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.program}>
        <Header />
        Retrouve ton emploie du temps de la journée
      </div>
    );
  }
}

export default Program;
