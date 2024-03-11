'use client';

import React, { useState } from "react";
import { Button } from "../../Components/ui/button.jsx";

export default function ButtonClick() {
 const [clicked, setClicked] = useState(0);

 const handleClick = () => {
    setClicked(prevClicked => prevClicked + 1);
 };

 return (
    <>
      <Button onClick={handleClick}>Load More</Button>
      <Button clicked={clicked} >{clicked}</Button>
    </>
 );
}