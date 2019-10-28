import React from 'react';
import styles from './Footer.module.css';

const footer = () => {
  return (
    <div className={styles.Footer}>
      <a
        href='https://f1rendev.netlify.com/'
        rel='noopener noreferrer'
        target='_blank'
      >
        © Valentine Maltsev
      </a>
    </div>
  );
};

export default footer;
