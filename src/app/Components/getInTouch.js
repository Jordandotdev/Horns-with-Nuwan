import Image from 'next/image';
import Prashan1 from '../../../public/jpg1.jpg';
import Prashan2 from '../../../public/jpg2.jpg';

export default function GetInTouch() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 md:py-32 md:px-8">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
          <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        <div className='flex gap-4 mt-8 space-x-4 lg:justify-start md:justify-start sm:justify-center' alt='Social-Icons'>
          <a href="#" target="_blank">
            <img className='h-8 w-auto transform transition-transform duration-500 ease-in-out hover:scale-110' src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge"  alt="linkedin logo"  />
          </a>
          <a href="#" target="_blank">
            <img className='h-8 w-auto transform transition-transform duration-500 ease-in-out hover:scale-110' src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge"  alt="instagram logo"  />
          </a>
          <a href="#" target="_blank">
            <img className='h-8 w-auto transform transition-transform duration-500 ease-in-out hover:scale-110' src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge"  alt="gmail logo"  />
          </a>
        </div>
        </div>
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
              quality={75} 
              alt="Image description" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
