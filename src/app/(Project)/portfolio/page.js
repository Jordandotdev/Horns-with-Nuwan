'use client';

import  Projects  from '../action.js';

const Portfolio = () => {

  const item = 9;

  return (
    <section className="mt-14 bg-offwhite px-4 py-4">
     <Projects item={item}/>
    </section>
  )
};

export default Portfolio;

