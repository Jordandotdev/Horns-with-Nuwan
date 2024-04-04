import Portrait from './portrait.js';
import Educator from './educator.js';
import Majestic from '../majestic-horns/majestic_horns.js';

export default function AboutMeHome({ pageValue }) {
  console.log(`Page Value: ${pageValue}`);
  
  return (
    <div>
      <section>
        <Portrait/>
        <Educator/>
        <Majestic/>
      </section>
    </div>
  )
}