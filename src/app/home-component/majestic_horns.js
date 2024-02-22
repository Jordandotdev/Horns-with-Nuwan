import Image from "next/image";
import Horns1 from '../../../public/Horns1.jpg';
import Horns2 from '../../../public/Horns2.jpg';

export default function majestic_horns() {
    return (
        <div>
            <section id="Majestic" className="bg-white px-4 py-8">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"> 
                    <div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="relative aspect-w-16 aspect-h-9">
                            <Image
                            className="rounded-lg"
                            src={Horns1}
                            layout="responsive"
                            objectFit="cover"
                            quality={75} 
                            priority 
                            alt="Image description" 
                            />
                        </div>

                        <div className="relative aspect-w-16 aspect-h-9 mt-4 md:mt-8">
                            <Image
                            className="rounded-lg"
                            src={Horns2}
                            layout="responsive"
                            objectFit="cover"
                            quality={75} // Adjust quality as needed
                            alt="Image description" // Always provide an alt attribute for accessibility
                            />
                        </div>
                    </div>
                    </div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Majestic Horns</h2>
                        <p className="mb-4">
                            Majestic Horns is dedicated to providing the highest quality repair
                             and restoration services.
                        </p>
                        <p>
                            Majestic Horns offers a complete range of repair services from
                             a simple adjustment to a complete overhaul for all the Woodwind and Brasswind instruments.
                        </p>
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