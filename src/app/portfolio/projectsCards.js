import { FetchProjects } from "../action.js";
import ProjectTemp from "../Components/project_temp.js";
import React from "react";


const ProjectsCards = async ({items})=> {
  const setPage = 1;
  const setItems = items;
  const projects = await FetchProjects(setPage, setItems);

  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
        {projects && projects.data && projects.data.map((setItems) => (
          <ProjectTemp  project={setItems} />
        ))}
      </div>
  );
}
 
export default ProjectsCards;