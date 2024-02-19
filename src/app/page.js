import Hero from './home-component/hero.js';
import Majestic from './home-component/majestic_horns.js';
import Audio from './home-component/discover_audio.js';

export default function Home() {
  return (    
  <div className='bg-white'>
      <Hero/>
      <Audio/>
      <Majestic/>
  </div>
  )
}
