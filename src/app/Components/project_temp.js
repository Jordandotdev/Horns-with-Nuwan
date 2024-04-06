'use client';

import { Button } from "./ui/button.jsx";
import Image from "next/image.js";

const ProjectTemp = ({project}) => {

    const PicLink = 'https://nuwan-backend-k4wxw.ondigitalocean.app/uploads/Whats_App_Image_2024_01_16_at_13_13_35_4e637c3150.jpeg';

    return (
        <section className="m-2 font-sans leading-normal flex h-auto">
        <div className="bg-white max-w-xl shadow-lg rounded overflow-hidden m-4 sm:flex md:flex">
          <div className="h-48 sm:h-auto sm:w-80 md:w-140 flex-wrap rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat">
          <Image width="200" height="200" href={PicLink} alt={project.attributes.ProjectName} />
          </div>
          <div className="px-6 py-4">
            <h2 className="mb-2 font-black">
              {project.attributes.ProjectName}
            </h2>
            <h3 className="mb-2 text-gold text-sm">
              {project.attributes.ProjectDate}            
            </h3>
            {project.attributes.categories.data.map((category) => (
              <Button className='mr-1 mb-4' variant="outline" key={category.id}>
                {category.attributes.ProjectCategories}
              </Button>
            ))}
            <p className="mb-4 text-grey-dark text-sm">
              {project.attributes.Description}  
            </p>
            
            <a href={project.attributes.ProjectLink}>
              <Button>View</Button>  
            </a>
          </div>
        </div>
      </section>
    );
}

export default ProjectTemp;

