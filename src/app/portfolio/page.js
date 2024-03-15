import DataTable from "./datatable";
import ProjectsCards from './projectsCards.js';


export default function Portfolio() {
  
  return (
    <section className="mt-14 bg-offwhite px-4 py-4">
      <DataTable >
        <ProjectsCards/>
      </DataTable>
    </section>
  )
}


