/**
*
* Morning
*
*/

import React from 'react';
import localforage from 'localforage';
import BaseAPI from 'api/base.js';

import Header from '../Header';
import GoTop from '../../components/GoTop';
import styles from './styles.css';
import AppStyles from 'containers/App/styles.css';
import loader from '../App/img/loader.png';

class Morning extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      date: null,
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
          const date = new Date(response.data.posts[0].modified).toLocaleString(locale);

          this.setState({ isLoading: false, data: response.data.posts[0], date });
        });
      });
    });
  }

  render() {
    return (
      <div className={styles.morning}>
        <Header backButton />

        <GoTop />

        <div className={styles.container}>
          {
            this.state.isLoading &&
              <header className={styles.loading}>
                <img src={loader} alt="" />
              </header>
          }

          {
            this.state.data &&
              <div>
                <h2 className={styles.headerTitle}>
                  {this.state.data.title}
                </h2>

                <div className={AppStyles.articleDate}>{this.state.date}</div>

                <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
              </div>
          }
        </div>
      </div>
    );
  }
}

export default Morning;
