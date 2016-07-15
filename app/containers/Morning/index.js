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

    BaseAPI.getPost('1193').then((response) => {
      localforage.setItem('morningArticle', response.data, () => {
        this.setState({ isLoading: false, data: response.data });
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
