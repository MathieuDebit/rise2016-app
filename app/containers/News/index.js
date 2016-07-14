/**
*
* News
*
*/

import React from 'react';
import Header from '../Header';

import styles from './styles.css';

class News extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.news}>
        <Header />
        <div className={styles.container}>
          Les derniers articles tout chauds de tes journos préférés
        </div>
      </div>
    );
  }
}

export default News;
