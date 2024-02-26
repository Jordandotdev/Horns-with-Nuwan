import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button.jsx';
import { useState } from 'react';

export default function NavComponent() {
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
          path: '/#Majestic',
          name: 'Majestic Horns',
        },
        {
          path: '#Footer',
          name: 'Reach Out',
        },
      ]
      const pathname = usePathname();
      const [isActive, setIsActive] = useState(false);

    return(
        <nav className="fixed top-0 w-full z-50">


      <div className="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto p-4">
        <ul className='flex flex-col gap-2 bg-white backdrop-blur-md p-3 rounded-lg shadow-lg transition-all duration-500 ease-out hover:opacity-100 opacity-30 md:flex-row'>
          {links.map(link => {
            return (
              <li key={link.path} className="md:inline-block">
                <Link className={cn("font-medium rounded-lg text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200",
                    pathname === link.path ? "bg-slate-300" : ""
                )} href={link.path}>
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
          <Button onClick={() => setIsActive(!isActive)}>{isActive ? 'Close' : 'Open'}</Button>
        </ul>
      </div>
    </nav>
    );
}