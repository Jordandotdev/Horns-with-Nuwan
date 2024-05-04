import Image from "next/image";
import Horns1 from '../../../../public/Horns3.jpg';
import Horns2 from '../../../../public/Horns4.jpg';
import config from '../../../config.js';

const fetchHorns = async () => {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      },
      cache: 'no-store', 
    };
    const response = await fetch(`${config.api}/api/majestic-horn`, reqOptions);
    const data = await response.json();
    return data;
  };

const majestic_horns = async ()  => {
    const Horns = await fetchHorns();
    return (
        <div>
            <section id="Majestic" className="bg-offwhite px-4 py-8">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"> 
                    <div>
                    <div className="grid grid-cols-2 gap-4 mt-8 ">
                        <div className="relative aspect-w-16 aspect-h-9">
                            <Image
                            className="rounded-lg h-screen max-h-[200px] max-w-1/3  sm:max-h-[400px] sm:max-w-1/2 object-cover object-center  "
                            src={Horns1}
                            placeholder="blur" 
                            quality={75} 
                            alt="Image description" 
                            />
                        </div>

                        <div className="relative aspect-w-16 aspect-h-9 mt-4 md:mt-8">
                        <Image
                            className="rounded-lg h-screen max-h-[200px] max-w-1/3  sm:max-h-[400px] sm:max-w-1/2 object-cover object-center "
                            src={Horns2}
                            placeholder="blur" 
                            quality={75} 
                            alt="Image description" 
                            />
                        </div>
                    </div>
                    </div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Majestic Horns</h2>
                        <p className="mb-4">
                            {Horns.data.attributes.Paragraph1}
                        </p>
                        <p>
                            {Horns.data.attributes.Paragraph2}
                        </p>
                        {/* links to be given  */}
                        <div className='flex mt-8 space-x-4 lg:justify-start md:justify-start sm:justify-center' alt='Social-Icons'>
                            <a href="https://www.instagram.com/majestichorns/" target="_blank">
                                <img className='rounded-lg h-8 w-auto transform transition-transform duration-500 ease-in-out hover:scale-110' src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=0F172A&logoColor=white&labelColor=&style=for-the-badge"  alt="instagram logo"  />
                            </a>
                            <a href="https://www.facebook.com/majestichorns" target="_blank">
                                <img className='rounded-lg h-8 w-auto transform transition-transform duration-500 ease-in-out hover:scale-110' src="https://img.shields.io/static/v1?message=FaceBook&logo=FaceBook&label=&color=0F172A&logoColor=white&labelColor=&style=for-the-badge"  alt="gmail logo"  />
                            </a>
                        </div>
                    </div>
            </div>
            </section>
        </div>
    );
}

export default majestic_horns;