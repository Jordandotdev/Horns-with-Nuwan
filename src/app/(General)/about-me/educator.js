import Image from 'next/image';
import Educator from '../../../../public/educator.jpg';
import config from '../../../config.js';

const fetchEducator = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    },
    cache: 'no-store',
  };
  const response = await fetch(`${config.api}/api/an-educator`, reqOptions);
  const data = await response.json();
  return data;
};

const educator = async ()=> {

  const educator = await fetchEducator();

    return(
      <section className="bg-offwhite px-4 py-4 ">
        <div className="gap-16 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">
        <div className="relative aspect-w-1 aspect-h-1 mt-2 md:mt-4">
              <Image
                  className="rounded-lg h-auto max-h-[700px] object-cover object-top lg:max-w-[450px] "
                  src={Educator}
                  quality={75}   
                  alt="Image description"
              />
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">An Educator</h2>
              <p className="mb-4">
                  {educator.data.attributes.Paragraph1}
              </p>
              <p>
                  {educator.data.attributes.Paragraph2}
              </p>
            </div>
          </div>
    </section>
    );
    }

    export default educator;