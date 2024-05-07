'use server';

import config from '../../config.js';

export const FetchProjectsExploratory = async (items) => {
 const itemNumber = Number(items);
 const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
      cache: 'no-store', 
 };
 try {
    const response = await fetch(`${config.api}/api/projects?populate=*&pagination[pageSize]=${itemNumber}&filters[categories][ProjectCategories][$contains]=Exploratory`, reqOptions);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const projects = await response.json();
    console.log('Projects: ', projects.data);
    return projects;
 } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error; 
 }
};
