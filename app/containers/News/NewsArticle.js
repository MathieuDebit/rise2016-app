/**
*
* NewsArticle
*
*/

import React from 'react';

import styles from './styles.css';

const NewsArticle = (props) => {
  const date = new Date(props.date).toLocaleString('en-GB');

  return (
    <article className={styles.article}>
      <div className={styles.img_wrapper}>
        <img src={props.coverImage || 'http://placehold.it/290x120'} alt="post cover" />
      </div>

      <div className={styles.text}>
        <a href="#" className={styles.title}>{props.title}</a>
        <p className={styles.date}>{date}</p>
        <p className={styles.excerpt}>{props.excerpt}</p>
        <button className={styles.button}>
          <a href={props.articleUrl} target="_blank">Read More</a>
        </button>
      </div>
    </article>
  );
};

NewsArticle.propTypes = {
  coverImage: React.PropTypes.string,
  title: React.PropTypes.string,
  date: React.PropTypes.string,
  excerpt: React.PropTypes.string,
  articleUrl: React.PropTypes.string,
};

export default NewsArticle;
