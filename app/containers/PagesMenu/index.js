/**
*
* PagesMenu
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import iconBriefing from './img/briefing.svg';
import iconContact from './img/contact.svg';
import iconActus from './img/actus.svg';
import iconDebauche from './img/debauche.svg';
import iconDepeche from './img/depeche.svg';
import iconLive from './img/live.svg';

class PagesMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.pagesMenu}>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/program'}>
            <img src={iconBriefing} alt="" />
            <span>Briefing du jour</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/live'}>
            <img src={iconLive} alt="" />
            <span>Live</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/morning'}>
            <img src={iconDepeche} alt="" />
            <span>Dépeche du matin</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/evening'}>
            <img src={iconDebauche} alt="" />
            <span>Débauche du soir</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/news'}>
            <img src={iconActus} alt="" />
            <span>Actus</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/contact'}>
            <img src={iconContact} alt="" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default PagesMenu;
