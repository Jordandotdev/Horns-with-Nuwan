import { FetchProjects } from "../action.js";
import ProjectTemp from "../Components/project_temp.js";
import ButtonClick from "./component/buttonClick.js";


export default async function DataTable() {
  const items = 6;
  const page = 1;
  const projects = await FetchProjects(page, items);

  return (
    <section className="flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
        {projects && projects.data && projects.data.map((item, index) => (
          <ProjectTemp key={item.id} project={item} id={index}/>
        ))}
      </div>
      <ButtonClick />
    </section>
  );
}
