import { useState } from "react";
import "./ProjectDisplay.css";
import type { Project } from "../../models/Project";
export const ProjectDisplay = () => {
  const [currentProject, setCurrentProject] = useState<Project>({
    title: "Jurassic Park",
    img: "https://media.discordapp.net/attachments/82814527707549696/1386980380032237649/image.png?ex=685bada3&is=685a5c23&hm=a7bb826881a50311ac7195a8f817665e2d5b4d8109315f4b273583e9c09ce011&=&format=webp&quality=lossless&width=1409&height=670",
    description: "",
    current: false,
  });
  const projectList: Project[] = [
    {
      title: "Jurassic Park",
      img: "https://media.discordapp.net/attachments/82814527707549696/1386980380032237649/image.png?ex=685bada3&is=685a5c23&hm=a7bb826881a50311ac7195a8f817665e2d5b4d8109315f4b273583e9c09ce011&=&format=webp&quality=lossless&width=1409&height=670",
      description: "",
      current: false,
    },
    { title: "Quiz", img: "", description: "", current: false },
    { title: "Todo List", img: "", description: "", current: false },
  ];
  const handleClick = (name: string) => {
    const filteredList = projectList.filter((p) => p.title === name);
    setCurrentProject(filteredList[0]);
  };
  return (
    <div className="projectWrapper">
      <img
        src={currentProject?.img}
        alt={currentProject?.title}
        width={"500px"}
        height={"300px"}
        className="projectWrapper__image"
      />
      <div className="projectWrapper__desc">
        <h4>{currentProject?.title}</h4>
        <p>{currentProject?.description}</p>
      </div>
      <div className="projectWrapper__menu">
        <button onClick={() => handleClick("Jurassic Park")}>Jurassic</button>
        <button onClick={() => handleClick("Quiz")}>Quiz</button>
        <button onClick={() => handleClick("Todo List")}>Todo List</button>
      </div>
    </div>
  );
};
