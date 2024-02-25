import { Button } from "./ui/button.jsx";

export default function ProjectTemp() {
    return (
        <section className="m-2 font-sans leading-normal flex h-auto">

      
        <div className="max-w-xl  shadow-lg rounded overflow-hidden m-4 sm:flex md:flex">
          <div className="h-48 sm:h-auto sm:w-80  md:w-140 flex-wrap  rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('https://unsplash.it/804/800')]" >
          </div>
          
      
           <div className="px-6 py-4 ">
            <h2 className="mb-2 font-black">
              Mystique Forest
            </h2>
            <h3 className="mb-4 text-gold text-sm" >
              12/02/2023            </h3>
            <p className="mb-4 text-grey-dark text-sm">
              A beautiful forest with a lot of mysteries to be solved.
               A piece that defines and redefines the beauty of nature.  
            </p>
            
            <Button>View</Button>  
             
          </div>
      
        </div>
        
      </section>
    );
}