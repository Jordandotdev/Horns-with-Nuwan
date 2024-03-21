'use client';

import React, { useState, useEffect } from 'react';
import config from '../../config.js';
import ProjectTemp from '../../app/Components/project_temp.js';

export default function Projects({ items }) {
  const [posts, setPosts] = useState(null);
  const pageNumber = 1;
  const itemNumber = 6;
  
  const getProjects = async () => {
    try {
      const response = await fetch(
        `${config.api}/api/projects?populate=*&publicationState=live&locale[0]=en&pagination[pageSize]=${itemNumber}&pagination[page]=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN_2}`
          },
          cache: 'no-store',
        }
      );
      if (response) {
        console.log('response:', response);
      }else{
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.log('There was a problem with your fetch operation:', error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-lg">
        {posts  && posts.map((props, index) => (
          <ProjectTemp key={index} project={props} />
        ))}
      </div> */}
      <h1>{posts}</h1>
    </>
  );
}
