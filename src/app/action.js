'use server';

import config from '../config.js';

export const FetchProjects = async (page) => {
    const pageNumber = Number(page);
    const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`
        }
      };
      const response = await fetch(`${config.api}/api/projects?pagination[pageSize]=6&pagination[page]=${pageNumber}`, reqOptions);
      const projects = await response.json();
      console.log(projects.data);
      console.log(typeof data);
      return projects;
    };  