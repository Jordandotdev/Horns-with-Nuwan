import Image from 'next/image';
import Prashan1 from '../../../public/jpg1.jpg';
import { Button } from "../Components/ui/button.jsx"

//create a down arrow for the Exploratory projects instead of the button
export default function expeditions() {
return(
    <section style={{backgroundColor: '#f9f6f2'}} className=" px-4 py-4 mt-16">
        <div className="gap-16 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">
        <div className="relative aspect-w-1 aspect-h-1 mt-2 md:mt-4">
            <Image
                className="rounded-lg"
                src={Prashan1}
                layout="responsive"
                objectFit="cover"
                quality={75}  
                alt="Image description"  
            />
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Expeditions</h2>
            <p className="mb-4">
                Nuwan is interested in several research areas of music. He pays special attention to
                ethonomusic and in particular. Papare which is a style of music that Nuwan perosnaly hopes
                to bring to the limelight it trully deserves.
            </p>
            <p>
            Nuwan is interested in several research areas of music. He pays special attention to
                ethonomusic and in particular. Papare which is a style of music that Nuwan perosnaly hopes
                to bring to the limelight it trully deserves.Nuwan is interested in several research areas of music. He pays special attention to
                ethonomusic and in particular. Papare which is a style of music that Nuwan perosnaly hopes
                to bring to the limelight it trully deserves.
            </p>
            <a href='/portfolio'>
            <Button   className="mt-4" >View More Bellow</Button>
            </a>
            </div>
        </div>
    </section>
);
}