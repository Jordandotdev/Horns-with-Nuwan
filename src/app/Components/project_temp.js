"use client";

import { Button } from "./ui/button.jsx";
import Image from "next/image.js";
import config from "../../config.js";

const ProjectTemp = ({ project }) => {
  return (
    <section className="m-2 font-sans leading-normal">
      <div className="bg-white max-h-lg max-w-lg shadow-lg rounded-xl overflow-hidden m-4">
        <div className="relative h-60 sm:48 md:20  rounded-lg">
          <Image
            className="object-cover w-full h-full"
            fill={true}
            src={`${config.api}${project.attributes.Image.data.attributes.url}`}
            alt={project.attributes.ProjectName}
          />
        </div>
        <div className="px-6 py-4 ">
          <h2 className="mb-2 font-black">{project.attributes.ProjectName}</h2>
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
            <Button className="mt-4">View</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectTemp;
