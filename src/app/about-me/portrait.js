import Image from 'next/image';
import Nuwan3 from '../../../public/Nuwan3.jpg';
import { Button } from '../Components/ui/button';
import config from '../../config.js';

const fetchPortrait = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  };
  const response = await fetch(`${config.api}/api/biography`, reqOptions);
  const data = await response.json();
  return data;
};

export default function selfPortrait() {

return(
    <section className="bg-white px-4 py-4 mt-16">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Biography</h2>
          <p className="mb-4">
            Nuwan Gunawardhana is an Eductor, Recording Artist, Composer and multo-instrumentalist
            who specializes in Trumpet, Trombone and Harmonica.He performs as a permanent member in two well established bands in Sri Lanka -
            The A Team and the Outlaws, and is also a member of Gustav Mahler Orchestra of Colombo.
          </p>
          <p>
            Nuwan is currently an instructor to the National Youth Orchestra of Sri Lanka and as well
            as an honorart consultant in music to the Sri Lanka Army. He also directed several school bands
            in Sri Lanka & taught Western music at Sussex College, Kiribathgoda. 
          </p>
          <Button className="mt-4">Download Resume</Button>

        </div>
        <div className="relative aspect-w-1  aspect-h-1 mt-2 md:mt-4 flex ">
          <Image
              className="rounded-lg h-auto max-h-[700px] object-cover object-top lg:max-w-[450px] "
              src={Nuwan3}
              quality={75}   
              alt="Image description"
          />
        </div>
      </div>
    </section>
);
}