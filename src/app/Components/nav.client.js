"use client";
import { useState } from 'react';
import NavComponent from './ui/nav';

export default function Nav() {
  
  const {isActive, setIsActive} = useState(false);
  return (
       <NavComponent/>
  );
}