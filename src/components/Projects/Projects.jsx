import React from 'react'

import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section>
      <h2> projects</h2>
      <div>
        {projects.map((project, id) => {
          return (<div key = {id}>
            <img src={project.imageSrc} alt = {`image of ${project.title}`} />
            <h3>{project.title}</h3>
            </div>
          );
        })}
        </div>
    </section>
  );
}