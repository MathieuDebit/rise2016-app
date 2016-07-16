/**
*
* PagesMenu
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import iconBriefing from './img/briefing.png';
import iconContact from './img/contact.png';
import iconActus from './img/actus.png';
import iconDebauche from './img/debauche.png';
import iconDepeche from './img/depeche.png';
import iconLive from './img/live.png';

class PagesMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.pagesMenu}>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/program'}>
            <img src={iconBriefing} alt="" />
            <span>Briefing of the day</span>
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
            <span>Morning Dispatch</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/evening'}>
            <img src={iconDebauche} alt="" />
            <span>Evening Dispatch</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/news'}>
            <img src={iconActus} alt="" />
            <span>News</span>
          </Link>
        </div>
        <div className={styles.pageButton}>
          <Link className={styles.content} to={'/contact'}>
            <img src={iconContact} alt="" />
            <span>Contact us</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default PagesMenu;
