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
        <Header />
        Contact
      </div>
    );
  }
}

export default Contact;
