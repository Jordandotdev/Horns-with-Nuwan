import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "./Components/footer.js";
import Nav from '../app/Components/navComponent.js';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome',
  description: 'Welcome to my personal website!',
}

function getPageValue(pageName) {
  let value;
  switch(pageName) {
     case 'home':
       value = 1;
       break;
     case 'portfolio':
       value = 2;
       break;
     case 'contact':
       value = 3;
       break;
     default:
       value = 1;
  }
  console.log(`Page Name: ${pageName}, Page Value: ${value}`);
  return value;
}

 export default function RootLayout({ children, pageName }) {
  const pageValue = getPageValue(pageName);
  return (
     <html lang="en">
       <body className={inter.className}>
         <Nav pageValue={pageValue}/>
         <main>{children}</main>
         <Footer/>
       </body>
     </html>
  )
 }


