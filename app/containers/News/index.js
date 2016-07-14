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
          <h1>Actualités</h1>
          <article className={styles.article}>
            <div className={styles.img_wrapper}>
              <img src="http://placehold.it/290x120" alt="" />
            </div>
            <div className={styles.text}>
              <a href="#" className={styles.title}>Informations participants</a>
              <p className={styles.date}>17 mars 2016</p>
              <p className={styles.excerpt}>Vous n’êtes pas membre du réseau PEJ et vous souhaitez participer à la 82ème Session internationale du Parlement Européen des Jeunes ?</p>
              <button href="#" className={styles.button}> Lire plus </button>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default News;
