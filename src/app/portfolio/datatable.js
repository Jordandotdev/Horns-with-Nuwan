'use client';

import React, { useState } from "react";
import { Button } from "../Components/ui/button.jsx";
import ProjectsCards from "./projectsCards.js";

export default function DataTable({children}) {
  const [items, setItems] = useState(6);
  const page = 1;
  

  const loadMore = () => {
    setItems((items) => (items) + 6);
  }


  return (
    <section className="flex flex-col items-center">
        <div>
          {children}
        </div>
     <Button onClick={loadMore}>Load More {items}</Button>
    </section>
  );
}
