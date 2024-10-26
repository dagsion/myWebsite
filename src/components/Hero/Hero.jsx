import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>What is Dagsion?</h1>
        <p className={styles.description}>
        Dagsion™ is the trademark of me. Every game I play, every nickname I register, and every social media platform I use Dagsion as my username.
        </p>
        <a href="assets/DavidXu_resume.pdf" className={styles.contactBtn}>
          My Resume
        </a>
      </div>
      {/*
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      */}
    </section>
    );
};
/*
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>What is Dagsion?</h1>
        <p className={styles.description}>
            My name is David Xu. Dagsion is the trademark of me. 
            Every game I play, every name I register, every social media username.
            I'm a full-stack developer with 5 years of experience using React and
            NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
*/