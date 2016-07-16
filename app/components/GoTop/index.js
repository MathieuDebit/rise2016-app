/**
*
* GoTop
*
*/

import React from 'react';

import styles from './styles.css';
import GoTopButton from './img/gotop.png';

class GoTop extends React.Component {
  constructor(props) {
    super(props);

    this.handleGoTop = this.handleGoTop.bind(this);
  }

  handleGoTop() {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > 0) {
      window.scrollTo(0, top - 50);
      setTimeout(this.handleGoTop, 10);
    }

    // this.scrollTo(0, 1250);
  }

  // scrollTo(to, duration) {
  //   console.log('scrollTo', to, duration);
  //   this.animateScroll(to, duration);
  // }
  //
  // animateScroll(to, duration) {
  //   console.log('__________');
  //   console.log('animateScroll', to, duration);
  //   console.log('document.body.scrollTop', document.body.scrollTop);
  //
  //   const start = document.body.scrollTop;
  //   const change = to - start;
  //   let currentTime = 0;
  //   const increment = 20;
  //
  //   currentTime += increment;
  //   const val = this.easeInOutQuad(currentTime, start, change, duration);
  //   console.log('val', val);
  //   window.scrollTo(0, val);
  //   console.log('currentTime, duration', currentTime, duration);
  //   if (currentTime < duration) {
  //     console.log('currentTime < duration, increment', currentTime, duration, increment);
  //     setTimeout(this.animateScroll(val, 1250), increment);
  //   }
  // }
  //
  // easeInOutQuad(t, b, c, d) {
  //   console.log('easeInOutQuad', t, b, c, d);
  //   let currentTime = t;
  //   const start = b;
  //   const change = c;
  //   const duration = d;
  //
  //   currentTime /= duration / 2;
  //   if (currentTime < 1) {
  //     console.log('currentTime < 1', (change / (2 * t * t)) + start);
  //     return (change / (2 * t * t)) + start;
  //   }
  //
  //   currentTime--;
  //   return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  // }

  render() {
    return (
      <div className={styles.goTop} onClick={this.handleGoTop}>
        <img src={GoTopButton} alt="" />
      </div>
    );
  }
}

export default GoTop;
