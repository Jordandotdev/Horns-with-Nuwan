'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'; 

export default function NavComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {
          path: '/',
          name: 'Home',
        },
        {
          path: '/about-me',
          name: 'Self Portrait',
        },
        {
          path: '/expeditions',
          name: 'Expeditions',
        },
        {
          path: '/portfolio',
          name: 'Portfolio',
        },
        {
          path: '/about-me#Majestic',
          name: 'Majestic Horns',
        },
        {
          path: '#Footer',
          name: 'Reach Out',
        },
      ];
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="max-w-screen-xl flex flex-col justify-center items-center mx-auto p-4 gap-2">
                {/* Hamburger Icon */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden bg-slate-400 p-3 rounded-full">
                    {isOpen ? (
                        <>
                            <Image src="https://www.svgrepo.com/show/80301/cross.svg" alt="Close Icon" width={20} height={20} />
                        </>
                    ) : (
                        <>
                            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                            <div className="w-6 h-0.5 bg-black"></div>
                        </>
                    )}
                </button>

                {/* Nav Links */}
                <ul className={`${isOpen ? 'block' : 'hidden'} md:flex flex-cols-2 gap-2 bg-white backdrop-blur-md p-3 rounded-lg shadow-lg transition-all duration-500 ease-out hover:opacity-100 lg:opacity-20 md:opacity-100 md:flex-row`}>
                    {links.map(link => {
                        return (
                            <li key={link.path} className="py-2 md:inline-block">
                                <Link className={cn("flex items-center font-medium rounded-lg text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200",
                                    pathname === link.path ? "bg-slate-300" : ""
                                )} href={link.path}>
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}