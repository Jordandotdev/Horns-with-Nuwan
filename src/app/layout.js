import './globals.css';
import Footer from "./Components/footer.client.js";
import Nav from './Components/nav.client.js';

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