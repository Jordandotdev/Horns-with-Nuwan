"use client";

import { useEffect } from "react";
import { LoadAnim } from "../../lib/loadinganim.js";

export default function Template({ children }) {
  useEffect(() => { 
      LoadAnim();
  }, []);
  
  return (
    <div>
      <div id="load" className="fixed top-0 z-50 h-screen bg-gray-200">
        <div className="flex flex-grow items-center justify-center align-middle text-center h-full">
          <div className="text-3xl font-bold p-60">
            “A true musician is someone who nourishes the souls of people with
            the music created with a purpose, and his journey should ideally be
            to become an artist with a distinct sound and a professional with
            great versatility.”
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
