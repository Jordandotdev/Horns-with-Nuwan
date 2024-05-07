"use client";

import { useEffect } from "react";
import { LoadAnim } from "../../lib/loadinganim.js";

export default function Template({ children }) {
  useEffect(() => {
    const delayDuration = 5;
    LoadAnim(delayDuration);
  }, []);

  return (
    <div>
      <div id="load" className="fixed top-0 z-50 h-screen bg-gray-200">
        <div className="flex flex-col flex-grow items-center justify-center align-middle text-center h-full">
          <div className="text-lg font-bold p-6 md:px-20 md:text-xl lg:p-40 lg:text-3xl">
            “A true musician is someone who nourishes the souls of people with
            the music created with a purpose, and his journey should ideally be
            to become an artist with a distinct sound and a professional with
            great versatility.”
          </div>
          <div>
            <div class="flex flex-row gap-2">
              <div class="w-4 h-4 rounded-full bg-gray-700 animate-bounce"></div>
              <div class="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:-.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
