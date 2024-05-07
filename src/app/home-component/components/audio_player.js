import React from 'react';
import Image from 'next/image';
import AlbumArt1 from '../../../../public/Albumart1.jpg';

const AudioPlayer = () => {
  return (
      <div className='mt-5 flex lg-w-8/12 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
        <div className="flex flex-col w-full">
            <div className="flex px-6 py-2 border-b">
                <span className="text-xl text-gray-500 font-medium ">
                    Listen In
                </span>
            </div>
           
            
            <div className="flex flex-col p-5">
                
                   <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
                   <iframe className='w-20 h-20' src="https://www.youtube.com/embed/706fAoDh7So"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                <div className="flex flex-col px-2 w-full">
                                    <span className="text-sm text-gold capitalize font-semibold pt-1">
                                    Mystique Forest    
                                    </span>
                                    <span className="text-xs text-gray-500 uppercase font-medium ">
                                    Nuwan Gunawardhana
                                    </span>
                                </div>                       
                    </div>
                
                    <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
                        <iframe className='w-20 h-20' src="https://www.youtube.com/embed/6XWVWH1tCzs"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                <div className="flex flex-col px-2 w-full">
                                    <span className="text-sm text-gold capitalize font-semibold pt-1">
                                        Waranayak - Instrumental Excerpt   
                                    </span>
                                    <span className="text-xs text-gray-500 uppercase font-medium ">
                                        Nuwan Gunawardhana
                                    </span>
                                </div> 
                    </div>

            </div>
        </div>
    </div>
  );
};

export default AudioPlayer;