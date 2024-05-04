'use client';

import { Button } from "./ui/button.jsx";
import Image from "next/image.js";


const ProjectTemp = ({project}) => {

    const PicLink = 'https://nuwan-backend-k4wxw.ondigitalocean.app/uploads/Whats_App_Image_2024_01_16_at_13_13_35_4e637c3150.jpeg';

    return (
      <section className="m-2 font-sans leading-normal flex h-auto">
      <div className="bg-white max-h-lg max-w-xl shadow-lg rounded overflow-hidden m-4 sm:flex md:flex">
        <div className="h-48 w-48 sm:h-auto rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat">
          <Image className="object-cover w-fit h-full" width="1000" height="1000" src={PicLink} alt={project.attributes.ProjectName} />
        </div>
        <div className="px-6 py-4 ">
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
            <div className=" text-sm font-normal mr-1 p-1  border-2 border-gray-400 rounded-lg  text-gray-800" key={category.id}>
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

