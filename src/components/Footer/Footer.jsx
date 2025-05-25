import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} David Xu. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="https://github.com/dagsion" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/dagsion" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:dagsion123@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};
