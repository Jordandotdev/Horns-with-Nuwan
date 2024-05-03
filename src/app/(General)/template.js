"use client";

import { useEffect } from "react";
import { LoadAnim } from "../../lib/loadinganim.js";

export default function Template({ children }) {
    useEffect(()=>{
        LoadAnim()
    },[])
  return (
    <>
        <div id="load" className="text-xl  text-center">
        “A true musician is someone who nourishes the souls of people with the
        music created with a purpose, and his journey should ideally be to
        become an artist with a distinct sound and a professional with great
        versatility.”
        </div>
      {children}
    </>
  );
}
