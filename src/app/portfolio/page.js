import LoadMore from "./loadmore.js";
import ProjectsCards from './projectsCards.js';



export default function Portfolio() {
  const items = 6;

  return (
    <section className="mt-14 bg-offwhite px-4 py-4">
      <ProjectsCards items={items}/>
      <LoadMore />
    </section>
  )
}


