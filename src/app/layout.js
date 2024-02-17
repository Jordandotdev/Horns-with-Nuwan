import { Inter } from 'next/font/google';
import './globals.css';
import Footer from "./Components/footerComponent.js";
import Nav from './Components/navComponent.js';

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