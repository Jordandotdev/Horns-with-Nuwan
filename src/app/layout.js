import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "./Components/footer.js";
import Nav from '../app/Components/navComponent.js';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome',
  description: 'Welcome to my personal website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Nav/>
        <main>{children}</main>
      <Footer/>
      </body>
      
    </html>
  )
}
