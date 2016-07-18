/**
*
* Evening
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

class Evening extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      hasError: false,
      date: null,
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
      BaseAPI.getPosts(locale, 'evening')
        .then((response) => {
          const posts = response.data.posts;

          if (posts[0]) {
            return localforage.setItem('eveningArticle', posts[0], () => {
              const date = new Date(posts[0].modified).toLocaleString(locale);

              this.setState({ isLoading: false, data: posts[0], date });
            });
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
      <div className={styles.evening}>
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
            this.state.hasError &&
              <p>Nothing here...</p>
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

export default Evening;
