import Hero from '../home-component/hero.js';
import Audio from '../home-component/discover_audio.js';


export default function Home() {
  return (    
  <div className=' flex-col bg-offwhite'>
      <Hero/>
      <Audio/>
  </div>
  )
}
