'use client';

import FetchProjects from "../action.js";
import Button from "../../Components/ui/button.jsx";

const LoadMore = () => {

  return (
    <section className="flex flex-col items-center">
      <FetchProjects />
      <Button >Load More </Button>
    </section>
  );

}

export default  LoadMore