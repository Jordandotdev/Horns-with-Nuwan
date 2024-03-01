'use server';
import config from '../../config.js';

export const FetchProjects = async () => {
    const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`
        }
      };
      const response = await fetch(`${config.api}/api/biography`, reqOptions);
      const data = await response.json();
      console.log(data);
      return data;
    };