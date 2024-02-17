<<<<<<< HEAD
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "./Components/footer.js";
import Nav from '../app/Components/nav.client.js';
=======
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from "./Components/footerComponent.js";
import Nav from './Components/navComponent.js';
>>>>>>> 17295d758b39e5ccd76bc4500938a014e502d586

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Welcome',
  description: 'Welcome to my personal website!',
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}