import React from 'react';
import styles from './homepage.module.css'

class Homepage extends React.Component {

  render() {
    const small = require('../../assets/images/mobile.jpg');
    const medium = require('../../assets/images/tab.jpg');
    const large = require('../../assets/images/desktop.jpg');
    const ResponsiveImage = () => (
      <img srcSet={`${small} 500w, ${medium} 1000w, ${large} 1500w`} src={small} alt="getty" />
    );
    return (
        <React.Fragment>
          {ResponsiveImage()}
          <aside className={styles.aside}>
          </aside>
        </React.Fragment>
    );
  }
}

export default Homepage;