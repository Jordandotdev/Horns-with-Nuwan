import Portrait from './portrait.js';
import Educator from './educator.js';

export default function AboutMeHome({ pageValue }) {
  console.log(`Page Value: ${pageValue}`);
  
  return (
    <div>
      <section>
        <Portrait/>
        <Educator/>
      </section>
    </div>
  )
}