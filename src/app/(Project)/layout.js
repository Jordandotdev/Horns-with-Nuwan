'use client';

import '../globals.css';
import Footer from "../Components/footer.js";
import Nav from '../Components/nav.js';
import Projects from './action.js'

export default function RootLayout() {
  const items = 6;

  return (
    <html lang="en">
      <body className='bg-offwhite'>
        <Nav />
          <div className='mt-16 flex flex-col justify-center'>
            <Projects items={items} />
          </div>
        <Footer />
      </body>
    </html>
  );
} 
