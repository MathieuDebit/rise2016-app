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
        <div className={styles.container}>
          <h1>Dépêche du matin</h1>
          <p> Félicitations chers délégués, vous entamez aujourd’hui votre premier jour de travail en commission ! Préparez-vous aux posts-its en masse, aux litres d’encre de feutres et stylos écoulés, aux kilos de papier… Alors pour l’occasion, voici donc le thème du jeu concours du jour : « Le post-it fou »</p>
          <p className={styles.text_infos}><strong>Rappel</strong> : postez votre photo sur <strong>Instagram</strong>, <strong>Facebook</strong> ou <strong>Twitter</strong> avec le hashtag <strong>#PlayInRISE</strong>
          </p>
          <h2>Musique du matin</h2>
          <div className={styles.videoWrapper}>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/NoGofvVhKTo" frameBorder="0" allowFullScreen></iframe>
          </div>
          <h2>Repas</h2>
          <p><strong>Petit-déjeuner</strong> : <br /> Confiture, céréales, beurre, viennoiseries, jus de fruits, thé et café <br />
            <strong>Midi</strong> : <br /> Salade du chef, poulet basquaise, pain, brie, fruits et galette au sucre
          </p>
          <h2>Météo</h2>
          <img className={styles.meteo} src="http://placehold.it/290x200" alt="" />
          <h2>Citation</h2>
          <bloquote className={styles.bloquote}>
            <p className={styles.quote}>“ Ce n’est pas le travail difficile qui est monotone, c’est le travail superficiel. ”</p>
            <p className={styles.author}>
              - Edith Hamilton, femme de lettres (DE)
            </p>
          </bloquote>
        </div>
      </div>
    );
  }
}

export default Morning;
