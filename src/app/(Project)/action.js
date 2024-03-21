'use client';

import React, { useState, useEffect } from 'react';
import config from '../../config.js';
import ProjectTemp from '../../app/Components/project_temp.js';


export default function Projects({ items }) {
  const [posts, setPosts] = useState(null);
  const pageNumber = 1;
  const itemNumber = items;
  const reqOptions ={
    headers: {
      Authorization: `Bearer 73e8f6d4d8a6130f1b93ae1143ac3b32f59c2ca3edcf11ed8d8504fc02ee527f7191cbbb360cbd3cfdb9b00b569512d289daa65c6648f77f417387fd9f0fd54ee9ab511243a1d56c40ad802ed61205999ce6d5cba11de5c029ad348ba9e1e9b34d8fe061fb29648273beba6c67c18a05aec5c7e263bb010312cbb5a4df327515`
    },
    cache: 'no-store',
  }
  const getProjects = async () => {
    try {
       const response = await fetch(
        `${config.api}/api/projects?populate=*&publicationState=live&locale[0]=en&pagination[pageSize]=${itemNumber}&pagination[page]=${pageNumber}`,
        reqOptions
      )
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } else {
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
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
        {posts && posts.data && posts.data.map((props) => (
          <ProjectTemp project={props} />
        ))}
      </div>
    </>
  );
}
