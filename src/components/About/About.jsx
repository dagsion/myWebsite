import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/*
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        */}
        <div className={styles.content}>
          <p></p>
          <p className={styles.aboutText}>
          Hi, my name is <b>David Xu</b>. I'm from Vancouver, BC and I'm currently studying electrical engineering at University of Toronto. I am passionate the development of niche technology.
          </p>
          <p className={styles.aboutText}>
          On the hardware side, I have experience with PCB layout and design, MCUs, and FPGA; on the side, I have done work on motor, solenoid drives, computer organization, and SoC platform architecture.
          </p>
          <p className={styles.aboutText}>
          On the software side, I have done full-stack web development with the MERN stack, and embedded systems software. I also have experiences with game development, and iOS development.
          </p>
          <p className={styles.aboutText}> I have a lot of hobbies. Currently I am building my Flipside website. Stay tuned!</p>
        </div>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <a href="https://www.linkedin.com/in/dagsion/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" /></a>
          </li>
          <li className={styles.aboutItem}>
            <a href= "https://github.com/dagsion"><img src={getImageUrl("contact/githubIcon.png")} alt="Github" /></a>
          </li>
          <li className={styles.aboutItem}>
          <a href= "mailto:davidxu20041231@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email" /></a>
          </li>
          <li className={styles.aboutItem}>
          <a href= "https://www.instagram.com/dagsion.music/"><img src={getImageUrl("contact/instagram-white-icon.png")} width={44} height={44} alt="Instagram" /></a>
          </li>
        </ul>
       {/*
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>

        */}
      </div>
    </section>
  );
};

 
