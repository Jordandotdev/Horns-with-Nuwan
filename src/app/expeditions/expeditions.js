import Image from 'next/image';
import Prashan1 from '../../../public/jpg1.jpg';
import { Button } from "../Components/ui/button.jsx"
import config from '../../config.js';

const fetchExpeditions = async () => {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      },
      cache: 'no-store',
    };
    const response = await fetch(`${config.api}/api/expedition`, reqOptions);
    const data = await response.json();
    return data;
  };

const expeditions = async () => {
    const Expeditions = await fetchExpeditions();
return(
    <section className="bg-offwhite px-4 py-4 mt-16">
        <div className="gap-16 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">
        <div className="relative aspect-w-1 aspect-h-1 mt-2 md:mt-4">
            <Image
                  className="rounded-lg h-auto max-h-[700px] object-cover object-top lg:max-w-[450px] "
                  src={Prashan1}
                  quality={75}   
                  alt="Image description"
              />
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Expeditions</h2>
            <p className="mb-4">
                {Expeditions.data.attributes.Paragraph1}
            </p>
            <p>
                {Expeditions.data.attributes.Paragraph1}
            </p>
            <a href='#Exploratory'>
            <Button   className="mt-4" >View More Bellow</Button>
            </a>
            </div>
        </div>
    </section>
);
}

export default expeditions;