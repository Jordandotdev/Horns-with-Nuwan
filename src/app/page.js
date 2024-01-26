
import GetInTouch from './Components/getInTouch.js';
import Portfolio from './Components/portfolio.js';
import Hero from './Components/hero.js';

import About from "./Components/about.js";

export default function Home() {
  return (    

  <div className='bg-white'>
      <Hero/>
      <About/>
      <Portfolio/>
      <GetInTouch/>
  </div>
  )
}
