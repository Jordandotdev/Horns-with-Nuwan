import Expeditions from "./expeditions";
import Projects from "./projects";

export default function ExpedtionsHome({ pageValue }) {
  console.log(`Page Value: ${pageValue}`);
  
  return (
    <div>
      <Expeditions />
      <Projects />
    </div>
  )
}