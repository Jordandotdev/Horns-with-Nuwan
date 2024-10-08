"use client";

import { useEffect } from "react";
import { LoadAnim } from "../../lib/loadinganim.js";

export default function Template({ children }) {
  useEffect(() => {
    const delayDuration = 8;
    const visitedBefore = localStorage.getItem('visitedBefore');

    async function handleLoadingAnimation() {
      if (window.location.pathname === '/' && !visitedBefore) {
        await LoadAnim(delayDuration); 
        setTimeout(() => {
        localStorage.setItem('visitedBefore', 'true');
        },delayDuration*1000);
      } else {
        const loadP = document.getElementById("load");
        if (loadP) {
          loadP.style.display = "none";
        }
      }
    }

    handleLoadingAnimation();
  }, []);

  return (
    <div>
      {/* Loading Animation Div */}
      <div id="load" className="fixed top-0 z-50 h-screen bg-amber-50">
        <div className="flex flex-col flex-grow items-center justify-center align-middle text-center h-full">
          <div className="text-lg text-gray-600 font-thin p-6 md:px-20 md:text-xl lg:p-40 lg:text-2xl">
            “A true musician is someone who nourishes the souls of people with
            the music created with a purpose, and his journey should ideally be
            to become an artist with a distinct sound and a professional with
            great versatility.”
          </div>
          <div>
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
}
