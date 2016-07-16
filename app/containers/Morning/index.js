/**
*
* Morning
*
*/

import React from 'react';
import localforage from 'localforage';
import BaseAPI from 'api/base.js';

import Header from '../Header';
import styles from './styles.css';
import loader from '../App/img/loader.png';

class Morning extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    localforage.getItem('morningArticle').then((morningArticle) => {
      this.setState({ isLoading: true, data: morningArticle });
    });

    localforage.getItem('userLocale').then((locale) => {
      BaseAPI.getPosts(locale, 'morning').then((response) => {
        localforage.setItem('morningArticle', response.data.posts[0], () => {
          this.setState({ isLoading: false, data: response.data.posts[0] });
        });
      });
    });
  }

  render() {
    return (
      <div className={styles.morning}>
        <Header backButton />

        <div className={styles.container}>
          <h2>Morning Dispatch</h2>

          {
            this.state.isLoading &&
              <header className={styles.loading}>
                <img src={loader} alt="" />
              </header>
          }

          {
            this.state.data &&
              <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
          }
        </div>
      </div>
    );
  }
}

export default Morning;
