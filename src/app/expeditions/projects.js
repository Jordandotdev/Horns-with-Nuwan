import Image from "next/image";
import { Button } from "../Components/ui/button.jsx"
import Prashan1 from "../../../public/jpg1.jpg";
import Prashan2 from "../../../public/jpg2.jpg";

export default function projects() {
    return(
        <section>
            <div id="main_port" className="item-center bg-white">
           <div className=" flex justify-center  mb-4 text-4xl p-24  items-center py-8 px-4 mx-auto max-w-screen-xl font-extrabold text-gray-900 dark:text-white">
            Portfolio 
           </div> 
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4   items-center py-4 px-4 mx-auto max-w-screen-xl">
            <div>
                <img
                    className="h-auto max-w-full rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                    alt="Portfolio Image 1"
                />
            </div>
            <div>
                <img
                    className="h-auto max-w-full rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                    alt="Portfolio Image 2"
                />
            </div>
            <div className="relative w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105">
            <Image
                className="rounded-lg"
                src={Prashan1}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 0%"
                alt="Portfolio Image 3"
            />
            </div>
            <div>
                <img
                    className="h-auto max-w-full rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                    alt="Portfolio Image 11"
                />
            </div>
            <div className="relative w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105">
            <Image
                className="rounded-lg"
                src={Prashan2}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 0%"
                alt="Portfolio Image 12"
            />
            </div>
            <div className="relative w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105">
            <Image
                className="rounded-lg"
                src={Prashan1}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 0%"
                alt="Portfolio Image 13"
            />
            </div>
        </div>
        
        <div className="flex justify-center items-center p-4 text-4xl  mx-auto max-w-screen-xl">
            <a href="/portfolio">
            <Button className="mt-4" >View More</Button>
            </a>
        </div>
        </div>
        </section>
    );
}