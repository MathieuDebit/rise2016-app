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
        <div className={styles.container}>
          <h1>débauche du soir</h1>
          <p>
            Les 10 commissions se sont aujourd’hui penchées sur leur problématique
             respective et on travaillé toute la journée, malgré le mauvais temps.
            Les clichés bretons se confirmeraient-ils ?
            <br /><br />

            Après cette longue journée de travail, il est temps d’aller dîner en centre-ville de
            Rennes. <strong>Rendez-vous sur le parvis du lycée</strong> à <strong>19h00</strong>.
            Et à 23h00, retour au lycée Saint-Vincent Providence ou au lycée Bréquigny ! <br /><br />

            Demain, préparez-vous pour la cérémonie d’ouverture de RISE 2016… Mais en attendant, voici les <strong>résultats du concours</strong> d’aujourd’hui sur le thème « Le post-it fou » !
          </p>

          <h2>Musique du soir</h2>
          <div className={styles.videoWrapper}>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180519630&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
          </div>

          <h2>Météo</h2>
          <img className={styles.meteo} src="http://placehold.it/290x200" alt="" />

          <h2 className={styles.center}>à demain !</h2>
        </div>
      </div>
    );
  }
}

export default Evening;
