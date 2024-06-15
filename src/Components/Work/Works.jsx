/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectNav } from "./Data";
import WorksItem from "./WorksItem";

export default function Works() {
  const [item, setItem] = useState({ name: "All" });
  const [active, setActive] = useState(0);
  const [project, setProject] = useState([]);

  useEffect(() => {
    if (item.name === "All") {
      setProject(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.Category === item.name;
      });
      setProject(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectNav.map((navItem, index) => (
          <span
            key={index}
            className={active === index ? `work__item_active` : "work__item"}
            onClick={(e) => handleClick(e, index)}
          >
            {navItem.name}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {project.map((projectItem) => (
          <WorksItem item={projectItem} key={projectItem.id} />
        ))}
      </div>
    </div>
  );
}
