import { FetchProjects } from "../action.js";
import ProjectTemp from "../Components/project_temp.js";
import React from "react";


const ProjectsCards = async ({page, items})=> {
  const setPage = 1;
  const setItems = 6;
  const projects = await FetchProjects(setPage, setItems);

  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
        {projects && projects.data && projects.data.map((item, index) => (
          <ProjectTemp key={item.id} project={item} id={index}/>
        ))}
      </div>
  );
}
 
export default ProjectsCards;