/**
*
* Contact
*
*/

import React from 'react';
import Header from '../Header';
import styles from './styles.css';

class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.contact}>
        <Header backButton />
        <div className={styles.container}>
          <div className={styles.contact_content}>
            <h2>CONTACTS</h2>
            <a className={styles.link} href="mailto:participants@rise2016.eu">
              participants@rise2016.eu
            </a><br></br>
            Inès: <a className={styles.link} href="tel:+33 6 38 38 27 67">
              +33 6 38 38 27 67
            </a><br></br>
            Manon: <a className={styles.link} href="tel:+33 6 43 44 84 46">
              +33 6 43 44 84 46
            </a><br></br>

            <h3>IN CASE OF EMERGENCY</h3>
            Emergency telephone number: 112

            <h3>PLACE WE’RE STAYING AT</h3>
            Rennes 16-23 JulyOfficials: Lycée Saint Vincent 57 Rue de Paris, 35000 Rennes
            Delegates: Lycée Bréquigny 7 avenue Georges Graff 35205 Rennes

            Report a bug : <a className={styles.link} href="mailto:communication@rise2016.eu">
            communication@rise2016.eu
            </a><br></br>
          </div>
          <br></br>
          <br></br>
          <div className={styles.contact_content}>

            <h2>CONTACTS</h2>
            <a className={styles.link} href="mailto:participants@rise2016.eu">
              participants@rise2016.eu
            </a><br></br>
            Inès: <a className={styles.link} href="tel:+33 6 38 38 27 67">
              +33 6 38 38 27 67
            </a><br></br>
            Manon: <a className={styles.link} href="tel:+33 6 43 44 84 46">
              +33 6 43 44 84 46
            </a><br></br>

            <h3>EN CAS D’URGENCE</h3>
            Numéro de téléphone d’urgence: 112

            <h3>LIEUX DE RÉSIDENCE</h3>
            Rennes 16-23 juilletOfficiels : Lycée Saint Vincent 57 Rue de Paris, 35000 Rennes
            Délégués : Lycée Bréquigny 7 avenue Georges Graff 35205 Rennes

            Reporter un bug : <a className={styles.link} href="mailto:communication@rise2016.eu">
            communication@rise2016.eu
            </a><br></br>
          </div>
          <br></br>
          <br></br>
          <div className={styles.contact_content}>

            <h2>KONTAKT</h2>
            <a className={styles.link} href="mailto:participants@rise2016.eu">
              participants@rise2016.eu
            </a><br></br>
            Inès: <a className={styles.link} href="tel:+33 6 38 38 27 67">
              +33 6 38 38 27 67
            </a><br></br>
            Manon: <a className={styles.link} href="tel:+33 6 43 44 84 46">
              +33 6 43 44 84 46
            </a><br></br>

            <h3>IM NOTFALL</h3>
            Notrufnummer: 112

            <h3>ORTE WIR BLEIBEN AUF</h3>
            Rennes 16-23 JuliOfficials: Lycée Saint Vincent 57 Rue de Paris, 35000 Rennes
            Delegierte: Lycée Bréquigny 7 avenue Georges Graff 35205 Rennes

            Fehler melden : <a className={styles.link} href="mailto:communication@rise2016.eu">
            communication@rise2016.eu
            </a><br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
