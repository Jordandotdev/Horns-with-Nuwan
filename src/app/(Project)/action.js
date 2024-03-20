'use client';

import React, { useState, useEffect } from 'react';
import config from '../../config.js';
import ProjectTemp from '../Components/project_temp.js';

const FetchProjects = () => {
 
  const [projectData, setProjectData] = useState([]);
 const pageNumber = 1; 
 const itemNumber = 6;
 const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
    cache: 'no-store',
 };

 useEffect(() => {
    fetch(`${config.api}/api/projects?populate=*&publicationState=live&locale[0]=en&pagination[pageSize]=${itemNumber}&pagination[page]=${pageNumber}`, reqOptions)
      .then(response => response.json())
      .then(data => setProjectData(data))
      .catch(error => console.error('Error fetching projects:', error));
 }, [reqOptions, pageNumber, itemNumber]); 


 return (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
            {projectData && projectData.data && projectData.data.map((setItems) => (
              <ProjectTemp key={setItems.id} project={setItems} /> 
            ))}
          </div>
        </>
 );
}
export default FetchProjects;