/**
*
* Program
*
*/

import React from 'react';
import localforage from 'localforage';
import BaseAPI from 'api/base.js';

import styles from './styles.css';
import AppStyles from 'containers/App/styles.css';
import Header from '../Header';
import GoTop from '../../components/GoTop';

import loader from '../App/img/loader.png';

class Program extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      hasError: false,
      date: '',
    };

    // this.getDate = this.getDate.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  // getDate(articleDate) {
  //   localforage.getItem('userLocale').then((locale) => {
  //     const date = new Date(articleDate).toLocaleString(locale);
  //
  //     this.setState({ date });
  //   });
  // }

  init() {
    localforage.getItem('programData').then((programData) => {
      this.setState({ isLoading: true, data: programData });
    });

    localforage.getItem('userLocale').then((locale) => {
      BaseAPI.getPosts(locale, 'briefing')
        .then((response) => {
          const posts = response.data.posts;

          if (posts[0]) {
            return localforage.setItem('programData', posts[0], () => {
              if (posts[0]) {
                const date = new Date(posts[0].modified).toLocaleString(locale);

                this.setState({ isLoading: false, data: posts[0], date });
              }
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
      <div className={styles.program}>
        <Header backButton />

        <GoTop />

        <div className={styles.container}>
          {
            this.state.isLoading &&
              <div className={AppStyles.loading}>
                <img src={loader} alt="" />
              </div>
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

export default Program;
