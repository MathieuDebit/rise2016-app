/**
*
* GoTop
*
*/

import React from 'react';

import styles from './styles.css';
import button from './img/gotop.png';

class GoTop extends React.Component {
  handleGoTop() {
    window.scrollBy(0, 0);
  }

  render() {
    return (
      <div className={styles.goTop} onClick={this.handleGoTop}>
        <img src={button} alt="" />
      </div>
    );
  }
}

export default GoTop;
