import React from 'react';
import styles from './Header.module.css';

const header = () => {
return (
    <h1 className={styles.Header}>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href='http://f1rendev.netlify.com/'
      >
        F1ren's Sleep Timer
      </a>
    </h1>
  );
};

export default header;
