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
        <Header />

        {
          this.state.isLoading &&
            <p>loading...</p>
        }

        {
          this.state.data &&
            <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
        }
      </div>
    );
  }
}

export default Morning;
