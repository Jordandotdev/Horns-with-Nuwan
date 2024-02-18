"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const links = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about-me',
      name: 'About Me',
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
      path: '#',
      name: 'Majestic Horns',
    },
    {
      path: '#',
      name: 'Reach Out',
    },
  ]
  const pathname = usePathname();
  return (
<nav className=" fixed top-0 w-full z-50">
  <div className="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto p-4">
   <ul className='flex gap-2 bg-white p-3 rounded-lg shadow-lg'>
    {links.map(link => {
      return(
        <li key={link.path}>
          <Link className={cn("font-medium rounded-lg text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200",
            pathname === link.path ? "bg-slate-300" : ""
          )} href={link.path}>
            <span>{link.name}</span>
          </Link>
        </li>
      )
    })}
   </ul>
  </div>
</nav>

  );
}