import Image from 'next/image';
import Prashan1 from '../../../public/jpg1.jpg';
import { Button } from "../Components/ui/button.jsx"


export default function expeditions() {
return(
    <section className="bg-white px-4 py-4 mt-16">
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
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Expeditions</h2>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            <a href='/portfolio'>
            <Button className="mt-4" >View More</Button>
            </a>
            </div>
        </div>
    </section>
);
}