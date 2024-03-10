'use client';

import React, { useEffect, useState } from "react";


function LoadMore({ clicked }) {
 const [page, setPage] = useState(1); 

 useEffect(() => {
  if (clicked) {
     setPage(prevPage => prevPage + 1);
  }
 }, [clicked]);


return (
  <div>
    Current Page: {page}
  </div>
);
}

export default LoadMore;