import '../globals.css';
import Footer from "../Components/footer.js";
import Nav from '../Components/nav.js';

export const metadata = {
  title: 'Welcome',
  description: 'Welcome to my personal website!',
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
