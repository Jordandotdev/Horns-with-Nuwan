'use client';

import  Projects  from '../action.js';
import Filter from '../../Components/filter.js';

const Portfolio = () => {

  return (
    <section className="mt-14 bg-offwhite px-1 md:px-4 py-4 flex flex-col justify-center"> 
    <div className="flex justify-end mr-28">
      <Filter/>
      </div>
     <Projects/>
    </section>
  )
};

export default Portfolio;

