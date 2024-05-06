"use client";

import { Button } from "./ui/button.jsx";
import Image from "next/image.js";
import config from "../../config.js";

const ProjectTemp = ({ project }) => {

 const projectStartDate = project.attributes.ProjectDate;
 const projectEndDate = project.attributes.ProjectDateEnd;

 // Correctly calculate the date difference outside of the JSX
 const dateDiff = dateDiffInDays(projectStartDate, projectEndDate);

 function dateDiffInDays(startDate, endDate) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    if(date2 !== 'null' && date2 > date1){
      const diffInTime = date2.getTime() - date1.getTime();
      const diffInDays = diffInTime / (1000 * 3600 * 24);
      return diffInDays; // Return the calculated difference
    }
    return 0; // Return 0 if the dates are not valid or the end date is not after the start date
 }

 return (
    <section className="m-2 font-sans leading-normal">
      <div className="bg-white max-h-lg max-w-lg shadow-lg rounded-xl overflow-hidden m-4">
        <div className="relative h-60 sm:48 md:20 rounded-lg">
          <Image
            className="object-cover w-full h-full"
            fill={true}
            src={`${config.api}${project.attributes.Image.data.attributes.url}`}
            alt={project.attributes.ProjectName}
          />
        </div>
        <div className="px-6 py-4 ">
          <h2 className="mb-2 font-black">{project.attributes.ProjectName}</h2>
          <div className="flex flex-row gap-2 items-center">
            <h3 className="mb-2 text-gold text-sm">
              {projectStartDate}
            </h3>
            {/* Conditionally render the date difference with style */}
            {dateDiff > 0 && (
              <h3 className="mb-2 text-white p-1 rounded-xl bg-gray-800 text-sm">
                {dateDiff} days
              </h3>
            )}
          </div>
          <p className="mb-4 text-grey-dark text-sm">
            {project.attributes.Description}
          </p>
          <div className="flex flex-wrap">
          {project.attributes.categories.data.map((category) => (
            <div className="text-sm font-normal mr-1 p-1 border-2 border-gray-400 rounded-lg text-gray-800" key={category.id}>
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