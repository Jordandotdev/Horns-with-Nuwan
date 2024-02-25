import { Button } from "../Components/ui/button.jsx";
import ProjectTemp from "../Components/project_temp.js";

export default function DataTable() {
  return (
    <section className="flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center py-4 px-4 mx-auto max-w-screen-l">
        <ProjectTemp />
        <ProjectTemp />
        <ProjectTemp />
        <ProjectTemp />
        <ProjectTemp />
        <ProjectTemp />
        <ProjectTemp />
      </div>
      <Button className="mt-4">Load More</Button>
    </section>
  );
}