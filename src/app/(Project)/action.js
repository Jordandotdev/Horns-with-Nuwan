'use client';

import React, { useState, useEffect, useCallback } from 'react';
import config from '../../config.js';
import ProjectTemp from '../../app/Components/project_temp.js';
import { Button } from '../Components/ui/button.jsx';

export default function Projects() {
  const [posts, setPosts] = useState(null);
  const pageNumber = 1;
  const [itemNumber, setItemNumber] = useState(6);
  const [filter, setFilter] = useState(''); // State for filter

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    cache: 'no-store',
  };

  // Fetch projects from the API
  const getProjects = useCallback(async () => {
    try {
      const response = await fetch(
        `${config.api}/api/projects?populate=*&pagination[pageSize]=${itemNumber}&pagination[page]=${pageNumber}&filters[categories][ProjectCategories][$contains]=${filter}`,
        reqOptions
      );
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
  }, [itemNumber, reqOptions, pageNumber, filter]);

  // Fetch projects when itemNumber or filter changes
  useEffect(() => {
    getProjects();
  }, [itemNumber, filter]);

  const incrementOnClick = () => {
    setItemNumber(prevItemNumber => prevItemNumber + 6);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value); // Set filter to selected category
    setItemNumber(6); // Reset pagination when filter changes
  };

  // Extract unique categories from posts
  const uniqueCategories = posts && posts.data
    ? [...new Set(posts.data.flatMap(post => post.attributes.categories.data.map(category => category.attributes.ProjectCategories)))]
    : [];

  return (
    <>
      {/* Filter Dropdown */}
      <div className="flex justify-center mb-2 mt-4">
        <select onChange={handleFilterChange} className="px-4 py-2 border rounded-md">
          <option value="">All Projects</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
        {posts && posts.data && posts.data.map((props) => (
          <ProjectTemp key={props.id} project={props} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center">
        <Button onClick={incrementOnClick} className="mt-4">
          Load More
        </Button>
      </div>
    </>
  );
}
