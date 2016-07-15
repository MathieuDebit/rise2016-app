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
    this.setState({ isLoading: true });

    BaseAPI.getPost('1193').then((response) => {
      localforage.setItem('programData', response.data, () => {
        this.setState({ isLoading: false, data: response.data });
      });
    });
  }

  render() {
    return (
      <div className={styles.program}>
        <Header />

        {
          this.state.isLoading &&
            <p>loading...</p>
        }

        {
          !this.state.isLoading && this.state.data !== null &&
            <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
        }
      </div>
    );
  }
}

export default Program;
