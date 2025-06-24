import { useState } from "react";
import "./ProjectDisplay.css";
import type { Project } from "../../models/Project";
import { projectList } from "../../models/ProjectList";
export const ProjectDisplay = () => {
  const [currentProject, setCurrentProject] = useState<Project>(projectList[0]);

  const handleClick = (name: string) => {
    const filteredList = projectList.filter((p) => p.title === name);
    filteredList[0].current = true;
    setCurrentProject(filteredList[0]);
  };

  return (
    <div className="projectWrapper">
      <div className="projectWrapper__contentRow">
        <div className="projectWrapper__imageWrapper">
          <a href={currentProject?.url} target="_blank">
            <img
              src={currentProject?.img}
              alt={currentProject?.title}
              width={"500px"}
              height={"300px"}
              className="projectWrapper__image"
            />
          </a>
        </div>
        <div className="projectWrapper__desc">
          <h4>
            <a href={currentProject?.url} target="_blank">
              {currentProject?.title}
            </a>
          </h4>
          <p>{currentProject?.description}</p>
        </div>
      </div>
      <div className="projectWrapper__menu">
        {projectList.map((p) => (
          <button
            onClick={() => handleClick(p.title)}
            className={currentProject.title === p.title ? "current" : ""}
          >
            {p.title}
          </button>
        ))}
      </div>
    </div>
  );
};
