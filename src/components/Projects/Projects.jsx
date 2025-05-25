import projects from "../../data/projects.json";
import React, { useEffect, useState } from "react";

import styles from './Projects.module.css'; 

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/dagsion/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo) => !repo.fork && repo.name !== "myWebsite"
        );
        setRepos(filtered);
      });
  }, []);

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title} >Projects</h2>
      <div className={styles.projectsGrid}>
        {repos.map((repo) => (
          <div key={repo.id} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{repo.name}</h3>
            <p className={styles.projectDesc}>
              {repo.description || "No description provided."}
            </p>
            <a
              className={styles.projectLink}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
