/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';
import localforage from 'localforage';

import styles from './styles.css';
import logo from './img/logo@2x.png';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'en-GB',
    };

    this.onLocaleChange = this.onLocaleChange.bind(this);
  }

  componentDidMount() {
    localforage.getItem('userLocale').then((locale) => {
      if (locale !== null) {
        this.setState({ locale });
      }
    });
  }

  onLocaleChange(event) {
    localforage.setItem('userLocale', event.target.value).then((locale) => {
      this.setState({ locale });
    });
  }

  render() {
    return (
      <div className={styles.header}>
        <Link className={styles.content} to={'/'}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
        </Link>

        <div className={styles.locale}>
          <select value={this.state.locale} onChange={this.onLocaleChange}>
            <option value="en-GB">EN</option>
            <option value="fr-FR">FR</option>
            <option value="de-DE">DE</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Header;
