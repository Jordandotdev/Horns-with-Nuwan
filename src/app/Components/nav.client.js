'use client';
import { useState } from 'react';
import NavComponent from './ui/nav';
import { Button } from './ui/button';

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  function handleClick(){
    console.log('clicked');
  }

  return (
    <>
      <NavComponent/>
      <Button onClick={() => setIsActive(!isActive)}>{isActive ? 'Close' : 'Open'}</Button>
    </>
  );
}