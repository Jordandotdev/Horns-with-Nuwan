'use client';

import React, { useEffect, useState } from "react";
import { Button } from "../Components/ui/button.jsx";


function LoadMore({ clicked }) {
 const [page, setPage] = useState(1); 

 useEffect(() => {
  if (clicked) {
     setPage(prevPage => prevPage + 1);
  }
 }, [clicked]);


return (
  <>
    <Button onClick={handleClick}>Load More</Button>
  </>
  );
}

export default LoadMore;