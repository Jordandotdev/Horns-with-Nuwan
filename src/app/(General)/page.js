import Hero from '../home-component/hero.js';
import Audio from '../home-component/discover_audio.js';

const Home = async () => {

  return (    
  <div className=' flex-col bg-offwhite'>
      <Hero/>
      <Audio/>
  </div>
  )
}

export default Home;