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
        Commence bien ta journée avec de la musique, le repas et d'autres surprises !
      </div>
    );
  }
}

export default Morning;
