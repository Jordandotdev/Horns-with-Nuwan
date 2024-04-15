'use client';

import { Button } from "./ui/button.jsx";
import Image from "next/image.js";

const ProjectTemp = ({project}) => {

    
    return (
      <section className="m-2 font-sans leading-normal flex h-auto md:justify-center">
      <div className="bg-white max-h-lg max-w-xl shadow-lg rounded overflow-hidden m-4 sm:flex md:flex">
        <div className="h-48 md:w-40 sm:30 sm:h-auto flex-wrap rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden bg-gray-800 bg-cover bg-center bg-no-repeat">
         
        </div>
        <div className="px-6 py-4">
          <h2 className="mb-2 font-black">
            {project.attributes.ProjectName}
          </h2>
          <h3 className="mb-2 text-gold text-sm">
            {project.attributes.ProjectDate}            
          </h3>
          <p className="mb-4 text-grey-dark text-sm">
            {project.attributes.Description}  
          </p>
          <div className="flex flex-wrap">
          {project.attributes.categories.data.map((category) => (
            <div className=" text-xs font-normal mr-0.5 p-1  rounded-lg  text-gray-600" key={category.id}>
              #{category.attributes.ProjectCategories}
            </div>
          ))}
          </div>
          <a href={project.attributes.ProjectLink}>
            <Button className='mt-4'>View</Button>  
          </a>
        </div>
      </div>
    </section>
    );
}

export default ProjectTemp;

