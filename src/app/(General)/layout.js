import '../globals.css';
import Footer from "../Components/footer.js";
import Nav from '../Components/nav.js';

export const metadata = {
  title: 'Nuwan Gunawardana',
  description: 'Explore the musical journey of Nuwan Gunawardhana, a versatile performer, recording artist, composer, arranger, and educator from Sri Lanka. Join me on a journey of musical exploration as we delve into different sounds and styles, elevating your experience and addressing meaningful social issues through music. Discover my early influences, diverse repertoire, and mission to support Horn players in Sri Lanka.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-offwhite'>
        <Nav />
          {children}
        <Footer />
      </body>
    </html>
  );
} 
