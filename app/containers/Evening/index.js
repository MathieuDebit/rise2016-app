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
        Découvre un récapitulatif de la journée, le programme de la soirée
      </div>
    );
  }
}

export default Evening;
