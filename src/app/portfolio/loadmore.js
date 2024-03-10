'use client';

import React, { useEffect, useState } from "react";
import { FetchProjects } from "../action.js";
import { ProjectTemp } from "../Components/project_temp.js";

import React, { useEffect, useState } from "react";
import { FetchProjects } from "../action.js";
import { ProjectTemp } from "../Components/project_temp.js";

function LoadMore({ Clicked }) {
 const [data, setData] = useState([]);
 const [page, setPage] = useState(2); 

 useEffect(() => {
    if (Clicked) {
      FetchProjects(page, 6)
        .then((res) => {
          setData([...data, ...res]);
          setPage(page + 1); 
        });
    }
 }, [Clicked, page]); 

 return (
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
        {data.map((item, index) => (
          <ProjectTemp key={item.id} project={item} id={index}/>
        ))}
      </div>
 );
}

export default LoadMore;