import Image from "next/image";
import Prashan1 from '../../../public/jpg1.jpg';
import Prashan2 from '../../../public/jpg2.jpg';

export default function majestic_horns() {
    return (
        <div>
            <section className="bg-white px-4 py-8">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"> 
                    <div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="relative aspect-w-16 aspect-h-9">
                            <Image
                            className="rounded-lg"
                            src={Prashan1}
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
                            src={Prashan2}
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
                            We are strategists, designers and developers. Innovators and problem solvers. 
                            Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
                        </p>
                        <p>
                            We are strategists, designers and developers.
                             Innovators and problem solvers. Small enough to be simple and quick.
                        </p>
                        <div className='flex gap-4 mt-8 space-x-4 lg:justify-start md:justify-start sm:justify-center' alt='Social-Icons'>
                            <a href="https://www.instagram.com/majestichorns/" target="_blank">
                                <img className='rounded-lg h-8 w-auto transform transition-transform duration-500 ease-in-out hover:scale-110' src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge"  alt="instagram logo"  />
                            </a>
                            <a href="https://www.facebook.com/majestichorns" target="_blank">
                                <img className='rounded-lg h-8 w-auto transform transition-transform duration-500 ease-in-out hover:scale-110' src="https://img.shields.io/static/v1?message=FaceBook&logo=FaceBook&label=&color=0866FF&logoColor=white&labelColor=&style=for-the-badge"  alt="gmail logo"  />
                            </a>
                        </div>
                    </div>
            </div>
            </section>
        </div>
    );
}