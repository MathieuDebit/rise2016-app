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
        <div className={styles.container}>
          <h1>Programme du jour</h1>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>6h00 - 7h00</span>
              <span className={styles.place}></span>
            </div>
            <h2 className={styles.title}>Wake up call - Transfert vers le Lycée Saint-Vincent Providence depuis le lycée Bréquigny</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>7h00 - 8h00</span>
              <span className={styles.place}>Lycée Saint-Vincent Providence</span>
            </div>
            <h2 className={styles.title}>Petit-déjeuner</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>8h00 - 12h30</span>
              <span className={styles.place}>Lycée Saint-Vincent Providence</span>
            </div>
            <h2 className={styles.title}>Travail en commission</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>12h30 - 13h30</span>
              <span className={styles.place}>Lycée Saint-Vincent Providence</span>
            </div>
            <h2 className={styles.title}>Déjeuner</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>13h30 - 15h30</span>
              <span className={styles.place}>Lycée Saint-Vincent Providence</span>
            </div>
            <h2 className={styles.title}>Travail en commission</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>15h30 - 16h00</span>
              <span className={styles.place}>Lycée Saint-Vincent Providence</span>
            </div>
            <h2 className={styles.title}>Coffee break</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>16h00 - 19h00</span>
              <span className={styles.place}>Lycée Saint-Vincent Providence</span>
            </div>
            <h2 className={styles.title}>Travail en commission</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>19h00 - 19h30</span>
              <span className={styles.place}></span>
            </div>
            <h2 className={styles.title}>Transfert en centre-ville</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>19h30 - 21h00</span>
              <span className={styles.place}>Centre-ville de Rennes</span>
            </div>
            <h2 className={styles.title}>Dîner en commission</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>21h00 - 23h00</span>
              <span className={styles.place}>Centre-ville de Rennes</span>
            </div>
            <h2 className={styles.title}>EYP Café</h2>
          </article>
          <article className={styles.article}>
            <div className={styles.infos}>
              <span>23h00 - 00h00</span>
              <span className={styles.place}></span>
            </div>
            <h2 className={styles.title}>Transfert vers les lycées Saint-Vincent Providence et Bréquigny</h2>
          </article>
        </div>
      </div>
    );
  }
}

export default Program;
