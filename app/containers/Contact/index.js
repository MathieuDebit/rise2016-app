/**
*
* Contact
*
*/

import React from 'react';
import Header from '../Header';
import { Link } from 'react-router';
import styles from './styles.css';

class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.contact}>
        <Header backButton />
        <div className={styles.container}>
          <h2>
            Contact us
          </h2>
          <p>
            Have any question ? A problem ? Send a mail or call Inès or Manon who help you!
          </p>
          <p>
            <Link className={styles.link} to={'mailto:participants@rise2016.eu'}>
              participants@rise2016.eu
            </Link>
          </p>
          <p>
            Manon: <Link className={styles.link} to={'tel:+33 6 38 38 27 67'}>
              +33 6 38 38 27 67
            </Link>
          </p>
          <p>
            Inès: <Link className={styles.link} to={'tel:+33 6 43 44 84 46'}>
              +33 6 43 44 84 46
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
