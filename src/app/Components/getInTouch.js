import Image from 'next/image';
import Prashan1 from '../../../public/jpg1.jpg';
import Prashan2 from '../../../public/jpg2.jpg';

export default function GetInTouch() {
  // Ensure that the parent container of the images defines their aspect ratio correctly
  // The 'aspect-w-16' and 'aspect-h-9' classes should maintain a 16:9 aspect ratio
  // Adjust the quality of the images as needed using the `quality` prop
  // You can use the `priority` prop for critical images that need to load immediately

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
          <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="rounded-lg"
              src={Prashan1}
              layout="responsive"
              objectFit="cover"
              quality={75} // Adjust quality as needed
              priority // Only if this image is critical and above the fold
              alt="Image description" // Always provide an alt attribute for accessibility
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
    </section>
  );
}
