import Nav from '../app/Components/navComponent.js';
import GetInTouch from './Components/getInTouch.js';
import Portfolio from './Components/portfolio.js';
import Hero from './Components/hero.js';
import Footer from "./Components/footer.js";
// import About from "./Components/about.js";

export default function Home() {
  return (    

  <div>

      <Nav/>
      <Hero/>
      <GetInTouch/>
      <Portfolio/>
      {/* <About/> */}
      <Footer/>

  </div>
  )
}
