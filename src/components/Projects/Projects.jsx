import projects from "../../data/projects.json";
import React, { useEffect, useState } from "react";

import styles from './Projects.module.css'; 
import repos from "../../data/github_repos.json";

export const Projects = () => {
  const filtered = repos.filter(
    (repo) => !repo.fork && repo.name !== "myWebsite"
  );

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsGrid}>
        {filtered.map((repo) => (
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
}