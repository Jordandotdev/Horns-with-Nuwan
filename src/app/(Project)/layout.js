'use client';

import '../globals.css';
import Footer from "../Components/footer.js";
import Nav from '../Components/nav.js';
import Portfolio from './portfolio/page';

export default function RootLayout() {
  return (
    <html lang="en">
      <body className='bg-offwhite'>
        <Nav />
          <Portfolio />
        <Footer />
      </body>
    </html>
  );
} 
