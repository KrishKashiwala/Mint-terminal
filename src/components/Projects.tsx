import React from "react";
import { projectsMap } from "../utils/commands";

interface projectsProps {
  id: string;
  title: string;
  description: string;
}
const Projects = () => {
  return (
    <>
      {projectsMap.map((item: projectsProps) => {
        return (
          <div className="projects">
            <div className="info">
              <div>{item.id}.</div>
              <div>{item.title}</div>
            </div>
            <div>{item.description}</div>
          </div>
        );
      })}
      <div className="extra-info">
        <div>Usage: projects go {`<project-no>`}</div>
        <div>eg: projects go 1</div>
      </div>
    </>
  );
};

export default Projects;
