'use client';

import React, { useState } from "react";
import { Button } from "../Components/ui/button.jsx";


export default function LoadMore() {
  const [items, setItems] = useState(6);
  
  const loadMore = async () => {
    setItems(items + 6);
  }

  return (
    <section className="flex flex-col items-center">
     <Button onClick={loadMore}>Load More {items}</Button>
    </section>
  );
}
