import { Button } from "../../Components/ui/button.jsx";

export default function ProjectTemp() {
    return (
        <section class="m-2 font-sans leading-normal flex h-auto">

      
        <div class="max-w-xl shadow-lg rounded overflow-hidden m-4 sm:flex">
          <div class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none  rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('https://unsplash.it/804/800')]" >
          </div>
          
      
           <div class="px-6 py-4">
            <h2 class="mb-2 font-black">Hello Tailwind!</h2>
            <p class="mb-4 text-grey-dark text-sm">
              Learning Tailwind is incredibly easy. The team has done a wonderful job with the documentation. This is pretty amazing, I must say.
             </p>
            
            <Button>Read More</Button>  
             
          </div>
      
        </div>
        
      </section>
    );
}