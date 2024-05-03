import Hero from '../home-component/hero.js';
import Audio from '../home-component/discover_audio.js';
import { wait } from '@/lib/utils.js';


const Home = async () => {

  await wait(1000)

  return (    
  <div className=' flex-col bg-offwhite'>
      <Hero/>
      <Audio/>
  </div>
  )
}

export default Home;