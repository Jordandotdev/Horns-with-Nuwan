import React from 'react';
import Image from 'next/image';
import AlbumArt1 from '../../../../public/Albumart1.jpg';

const AudioPlayer = () => {
  return (
      <div className='mt-5 flex lg-w-8/12 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
        <div className="flex flex-col w-full">
            <div className="flex p-5 border-b">
            <Image className='w-20 h-20 object-cover' alt='User avatar' src={AlbumArt1}/>
                <div className="flex flex-col px-2 w-full">
                    <span className="text-sm text-gold capitalize font-semibold pt-1">
                       Mystique Forest
                    </span>
                    <span className="text-xs text-gray-500 uppercase font-medium ">
                         Nuwan Gunawardhana
                    </span>
                </div>
            </div>
           
            
            <div className="flex flex-col p-5">
                
                    <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
                      <iframe className='w-10 h-10' src="https://youtu.be/706fAoDh7So" title="Mystique Forest" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <a href='https://youtu.be/706fAoDh7So'>
                            <div className="flex flex-col px-2 w-full">
                                
                                <span className="text-sm text-gold capitalize font-semibold pt-1">
                                  Mystique Forest    
                                </span>
                                <span className="text-xs text-gray-500 uppercase font-medium ">
                                Nuwan Gunawardhana
                                </span>
                            </div>
                        </a>
                    </div>
                
                 <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
                      <iframe className='w-10 h-10' src="https://youtu.be/6XWVWH1tCzs" title="Waranayak - Instrumental Exerpt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <a href='https://youtu.be/6XWVWH1tCzs'>
                      <div className="flex flex-col px-2 w-full">
                        
                        <span className="text-sm text-gold capitalize font-semibold pt-1">
                              Waranayak - Instrumental Exerpt    
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