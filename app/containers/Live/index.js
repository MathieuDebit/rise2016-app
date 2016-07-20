/**
*
* Live
*
*/

import React from 'react';
import localforage from 'localforage';
import BaseAPI from 'api/base.js';
import Header from '../Header';

import styles from './styles.css';
import AppStyles from 'containers/App/styles.css';
import loader from '../App/img/loader.png';

class Live extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      hasError: false,
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    this.setState({ isLoading: true });

    localforage.getItem('userLocale').then((locale) => {
      BaseAPI.getPosts(locale, 'live')
        .then((response) => {
          const posts = response.data.posts;

          if (posts[0]) {
            return this.setState({ isLoading: false, data: posts[0], hasError: false });
          }

          return this.setState({ isLoading: false, hasError: true });
        })
        .catch(() => {
          this.setState({ isLoading: false, hasError: true });
        });
    });
  }

  render() {
    return (
      <div className={styles.live}>
        <Header backButton />

        <div className={styles.container}>
          {
            this.state.isLoading &&
              <div className={AppStyles.loading}>
                <img src={loader} alt="" />
              </div>
          }

          <h2 className={styles.headerTitle}>
          Live
          </h2>

          {
            this.state.hasError &&
              <p>Oops, something went wrong...</p>
          }

          {
            this.state.data &&
              <div>
                <h2 className={styles.headerTitle}>
                  {this.state.data.title}
                </h2>

                <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
              </div>
          }

        </div>
      </div>
    );
  }
}

export default Live;
