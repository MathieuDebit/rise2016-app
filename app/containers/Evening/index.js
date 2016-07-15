/**
*
* Evening
*
*/

import React from 'react';
import localforage from 'localforage';
import BaseAPI from 'api/base.js';

import Header from '../Header';
import styles from './styles.css';

class Evening extends React.Component {
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
    localforage.getItem('eveningArticle').then((eveningArticle) => {
      this.setState({ isLoading: true, data: eveningArticle });
    });

    localforage.getItem('userLocale').then((locale) => {
      BaseAPI.getPosts(locale, 'evening').then((response) => {
        localforage.setItem('eveningArticle', response.data.posts[0], () => {
          this.setState({ isLoading: false, data: response.data.posts[0] });
        });
      });
    });
  }
  render() {
    return (
      <div className={styles.evening}>
        <Header />

        <div className={styles.container}>
          <h2>Evening</h2>

          {
            this.state.isLoading &&
              <p>loading...</p>
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

export default Evening;
