import React from 'react';
import Image from 'next/image';
import AlbumArt1 from '../../../public/Albumart1.jpg';

const AudioPlayer = () => {
  return (
      <div class='flex w-8/12  bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
        <div class="flex flex-col w-full">
            <div class="flex p-5 border-b">
            <Image class='w-20 h-20 object-cover' alt='User avatar' src={AlbumArt1}/>
                <div class="flex flex-col px-2 w-full">
                    <span class="text-xs text-gray-700 uppercase font-medium ">
                        now playing
                    </span>
                    <span class="text-sm text-gold capitalize font-semibold pt-1">
                       Mystique Forest 2 
                    </span>
                    <span class="text-xs text-gray-500 uppercase font-medium ">
                        -"Boston," Augustana
                    </span>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center p-5">
                <div class="flex items-center">
                    <div class="flex space-x-3 p-2">
        <button class="focus:outline-none">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#CEAA54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
        </button>
        <button class="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-gray-600 focus:outline-none">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#CEAA54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
        <button class="focus:outline-none">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#CEAA54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
        </button>
      </div>
                </div>
                <div class="relative w-full sm:w-1/2 md:w-7/12 lg:w-4/6 ml-2">
                    <div class="bg-gray-300 h-2 w-full rounded-lg"></div>
                     <div class="bg-gold h-2 w-1/2 rounded-lg absolute top-0"></div>
        
                </div>
                <div class="flex justify-end w-full sm:w-auto pt-1 sm:pt-0">
                <span class="text-xs text-gray-700 uppercase font-medium pl-2">
                    02:00/04:00                   
                </span>
                </div>
                
            </div>
            
            <div class="flex flex-col p-5">
                <div class="border-b pb-1 flex justify-between items-center mb-2">
                    <span class=" text-base font-semibold uppercase text-gray-700"> play list</span>
                    <img class="w-4 cursor-pointer" src="https://p.kindpng.com/picc/s/152-1529312_filter-ios-filter-icon-png-transparent-png.png" />
                </div>

                <div class="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
                    <Image  class='w-10 h-10 object-cover rounded-lg' alt='User avatar'src={AlbumArt1}/>
                    <div class="flex flex-col px-2 w-full">
                        
                        <span class="text-sm text-gold capitalize font-semibold pt-1">
                        Mystique Forest 2    
                        </span>
                        <span class="text-xs text-gray-500 uppercase font-medium ">
                            -"Boston," Augustana
                        </span>
                    </div>
                </div>
                 <div class="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
                    <Image  class='w-10 h-10 object-cover rounded-lg' alt='User avatar'src={AlbumArt1}/>
                    <div class="flex flex-col px-2 w-full">
                        
                        <span class="text-sm text-gold capitalize font-semibold pt-1">
                        Mystique Forest 2    
                        </span>
                        <span class="text-xs text-gray-500 uppercase font-medium ">
                            -"Boston," Augustana
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AudioPlayer;