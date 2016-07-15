/**
*
* News
*
*/

import React from 'react';
import BaseAPI from 'api/base.js';
import localforage from 'localforage';
import Header from '../Header';
import NewsArticle from './NewsArticle.js';

import loader from '../App/img/loader.png';

import styles from './styles.css';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    localforage.getItem('posts').then((posts) => {
      this.setState({ isLoading: true, posts });
    });

    BaseAPI.getPosts()
      .then((response) => {
        localforage.setItem('posts', response.data.posts, () => {
          this.setState({ isLoading: false, posts: response.data.posts });
        });
      })
      .catch((error) => {
        this.setState({ isLoading: false });

        throw error;
      });
  }

  render() {
    return (
      <div className={styles.news}>
        <Header />
        <div className={styles.container}>
          <h1>News</h1>
          {
            this.state.isLoading &&
              <header className={styles.loading}>
                <img src={loader} alt="" />
              </header>
          }

          {
            this.state.posts &&
            this.state.posts.map((post) =>
              <NewsArticle
                key={post.ID}
                coverImage={post.featured_image}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                articleUrl={post.URL}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default News;
