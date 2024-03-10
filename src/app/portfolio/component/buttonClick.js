'use client';

import React, { useState } from "react";
import LoadMore from "../loadmore.js";
import { Button } from "../../Components/ui/button.jsx";

export default function ButtonClick() {
 const [clicked, setClicked] = useState(false);

 const handleClick = () => {
    setClicked(true);
 };

 return (
    <>
      <Button onClick={handleClick}>Load More</Button>
      <LoadMore clicked={clicked} />
    </>
 );
}