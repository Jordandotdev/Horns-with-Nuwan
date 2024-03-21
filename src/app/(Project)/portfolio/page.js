'use client';

import  Projects  from '../action.js';

const Portfolio = () => {

  const numberItems = 3;

  return (
    <section className="mt-14 bg-offwhite px-4 py-4">
     <Projects item={numberItems}/>
    </section>
  )
};

export default Portfolio;

