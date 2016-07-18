/**
*
* NewsArticle
*
*/

import React from 'react';
import localforage from 'localforage';

import styles from './styles.css';

class NewsArticle extends React.Component {
  static propTypes = {
    coverImage: React.PropTypes.string,
    title: React.PropTypes.string,
    date: React.PropTypes.string,
    excerpt: React.PropTypes.string,
    articleUrl: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      date: null,
    };
  }

  componentDidMount() {
    localforage.getItem('userLocale').then((locale) => {
      const date = new Date(this.props.date).toLocaleString(locale);

      return this.setState({ date });
    });
  }

  render() {
    return (
      <article className={styles.article}>
        <div className={styles.img_wrapper}>
          {
            this.props.coverImage &&
              <img src={this.props.coverImage} alt="post cover" />
          }
        </div>

        <div className={styles.text}>
          <a href="#" className={styles.title}>{this.props.title}</a>
          <p className={styles.date}>{this.state.date}</p>
          <div />
          <p
            className={styles.excerpt}
            dangerouslySetInnerHTML={{ __html: this.props.excerpt }}
          />
          <button className={styles.button}>
            <a href={this.props.articleUrl} target="_blank">Read More</a>
          </button>
        </div>
      </article>
    );
  }
}

export default NewsArticle;
