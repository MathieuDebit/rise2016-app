/**
*
* Header
*
*/

import React from 'react';
import { Link, browserHistory } from 'react-router';
import localforage from 'localforage';

import styles from './styles.css';
import logo from './img/logo@2x.png';
import goBack from './img/goback.png';

class Header extends React.Component {
  static propTypes = {
    backButton: React.PropTypes.bool,
  }

  static defaultProps = {
    backButton: false,
  }

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

      localforage.setItem('userLocale', this.state.locale);
    });

    // browserHistory.listen((route) => {
    //   this.setState({ currentRoute: route.pathname });
    // });
  }

  onLocaleChange(event) {
    localforage.setItem('userLocale', event.target.value).then((locale) => {
      this.setState({ locale });

      browserHistory.push('/');
    });
  }

  render() {
    return (
      <div className={styles.header}>
        <Link className={styles.content} to={'/'}>
            {
              this.props.backButton &&
                <div className={styles.goBack}>
                  <img src={goBack} alt="" />
                </div>
            }

            {
              !this.props.backButton &&
                <div className={styles.logo}>
                  <img src={logo} alt="" />
                </div>
            }
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
