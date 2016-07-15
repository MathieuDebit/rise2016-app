/**
*
* Program
*
*/

import React from 'react';
import localforage from 'localforage';
import BaseAPI from 'api/base.js';

import styles from './styles.css';
import Header from '../Header';

class Program extends React.Component {
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
    localforage.getItem('programData').then((programData) => {
      this.setState({ isLoading: true, data: programData });
    });

    BaseAPI.getPosts('fr-FR', 'breifing').then((response) => {
      localforage.setItem('programData', response.data.posts[0], () => {
        this.setState({ isLoading: false, data: response.data.posts[0] });
      });
    });
  }

  render() {
    return (
      <div className={styles.program}>
        <Header />

        <div className={styles.container}>
          <h2 className={styles.headerTitle}>
            Briefing of the day
          </h2>
          {
            this.state.isLoading &&
              <p>loading...</p>
          }

          {
            !this.state.isLoading && this.state.data !== null &&
              <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
          }
        </div>
      </div>
    );
  }
}

export default Program;
