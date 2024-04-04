import Majestic from './majestic_horns.js';

export default function majestic_horns({ pageValue }) {
  console.log(`Page Value: ${pageValue}`);
  
  return (
    <div>
      <section>
        <Majestic/>
      </section>
    </div>
  )
}