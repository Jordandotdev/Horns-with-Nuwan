import config from '../config.js';

export const FetchProjects = async (page, items) => {
  const pageNumber = Number(page);
  const itemNumber = Number(items);
  const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
      cache: 'no-store', 
  };
  const response = await fetch(`${config.api}/api/projects?publicationState=live&locale[0]=en&pagination[pageSize]=${itemNumber}&pagination[page]=${pageNumber}`, reqOptions);
  const projects = await response.json();
  console.log('Projects: ', projects.data);
  return projects;
};