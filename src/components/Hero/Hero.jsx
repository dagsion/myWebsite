import React, { useRef, useState } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>What is Dagsion?</h1>
        <p className={styles.description}>
          Dagsion™ is the trademark of me. Every game I play, every nickname I
          register, and every social media platform I use Dagsion as my
          username.
        </p>
        <a href="/Software_Resume-1.pdf" className={styles.contactBtn}>
          My Resume
        </a>
      </div>

      <div className={styles.vinylWrapper} onClick={togglePlay}>
        {isPlaying && <span className={styles.pulse}></span>}
        <img
          src={getImageUrl("hero/vinyl.png")}
          alt="Scratch Disk"
          className={`${styles.vinyl} ${isPlaying ? styles.spinning : ""}`}
          draggable="false"
        />
        <audio ref={audioRef} src="/rickroll.MP3" preload="auto" />
      </div>
    </section>
  );
};
      {/*
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      */}
