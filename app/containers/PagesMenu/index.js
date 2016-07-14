/**
*
* PagesMenu
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

class PagesMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.pagesMenu}>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/program'}>
            <img src="http://placehold.it/60x60" alt="" />
            <span>Programme du jour</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/live'}>
            <img src="http://placehold.it/60x60" alt="" />
            <span>Live</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/morning'}>
            <img src="http://placehold.it/60x60" alt="" />
            <span>Dépeche du matin</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/evening'}>
            <img src="http://placehold.it/60x60" alt="" />
            <span>Débauche du soir</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/news'}>
            <img src="http://placehold.it/60x60" alt="" />
            <span>Actus</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/contact'}>
            <img src="http://placehold.it/60x60" alt="" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default PagesMenu;
