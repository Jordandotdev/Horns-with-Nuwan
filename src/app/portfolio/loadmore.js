// loadmore.js

import React, { useState, useEffect } from 'react';
import { FetchProjects } from "../action.js";
import ProjectTemp from '../Components/project_temp.js';
import { Button } from '../Components/ui/button.jsx';

export default function LoadMore() {
 const [items, setItems] = useState(6);
 const [projects, setProjects] = useState([]);
 const page = 1;

 useEffect(() => {
    const loadProjects = async () => {
      const fetchedProjects = await FetchProjects(page, items);
      setProjects(fetchedProjects);
    };

    loadProjects();
 }, [items]);

 const loadMore = () => {
    setItems((prevItems) => prevItems + 6);
 };

 return (
    <section className="flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
        {projects.map((item, index) => (
          <ProjectTemp key={item.id} project={item} id={index} />
        ))}
      </div>
      <Button onClick={loadMore}>Load More</Button>
    </section>
 );
}