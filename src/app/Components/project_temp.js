"use client";

import { Button } from "./ui/button.jsx";
import Image from "next/image.js";
import config from "../../config.js";
import Nuwan1 from "../../../public/Nuwan1.jpg";

const ProjectTemp = ({ project }) => {

 //variables 
 const projectStartDate = project.attributes.ProjectDate;
 const projectEndDate = project.attributes.ProjectDateEnd;

 const imageData = project.attributes.Image && project.attributes.Image.data ? project.attributes.Image.data : null;
 const imageUrl = imageData ? `${config.api}${imageData.attributes.url}` : null;
 const imageLink = project.attributes.PhotoUrl;
 const photo = Nuwan1;

 //variable used for the functions output
 const dateDiff = dateDiffInDays(projectStartDate, projectEndDate);
 const displayImage = checkImageUrl(imageUrl, imageLink);

 //function for calculating the difference between start date and end date
 function dateDiffInDays(startDate, endDate) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    if(date2 !== 'null' && date2 > date1){
      const diffInTime = date2.getTime() - date1.getTime();
      const diffInDays = diffInTime / (1000 * 3600 * 24);
      return diffInDays; 
    }
    return 0;
 }

 //function to check the imageUrl and the Image || if not return set image
 function checkImageUrl(imageUrl, imageLink) {
    if (imageUrl && imageLink) {
      return imageUrl;
    } else if(imageLink) {
      return imageLink;
    } else if(imageUrl) {
      return imageUrl;
    } else {
      return photo;
    }
 }

 return (
    <section className="relative m-2 font-sans leading-normal">
      <div className="bg-white max-h-lg max-w-lg shadow-lg rounded-xl overflow-hidden m-4">
        <div className="relative h-60 sm:48 md:20 rounded-lg">
          <Image
            className="object-cover w-full h-full"
            fill={true}
            src={displayImage}
            alt={project.attributes.ProjectName}
          />
        </div>
        <div className="px-6 py-4 ">
          <h2 className="mb-2 font-black">{project.attributes.ProjectName}</h2>
          <div className="flex flex-row gap-2 items-center">
            <h3 className="mb-2 text-gold text-md">
              {projectStartDate}
            </h3>
            {/* Conditionally render the date difference with style */}
            {dateDiff > 0 && (
              <h3 className="mb-2 text-black p-1 rounded-lg text-sm border-2 border-gray-400">
                {dateDiff} days
              </h3>
            )}
          </div>
          <p className="mb-4 text-grey-dark text-sm h-38 md:h-28 lg:h-24">
            {project.attributes.Description}
          </p>
          <div className="flex flex-wrap">
          {project.attributes.categories.data.map((category) => (
            <div className="text-xs font-normal mr-1 p-1 text-gray-800" key={category.id}>
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