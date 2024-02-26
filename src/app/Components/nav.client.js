'use client';
import NavComponent from './ui/nav';
import { Button } from './ui/button';

export default function Nav() {
  function handleClick(){
    console.log('clicked');
  }

  return (
    <>
      <NavComponent/>
      <Button onClick={handleClick}>Hello</Button>
    </>
  );
}