'use client';

import ProjectTemp from "../../Components/project_temp.js";
import React from "react";


export default function ProjectsCards(item) {
  const projects = FetchProjects(item);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
        {projects && projects.data && projects.data.map((props) => (
          <ProjectTemp  project={props} />
        ))}
      </div>
      <div className='flex justify-center'>
    </div>
    </>
  );
}
 
