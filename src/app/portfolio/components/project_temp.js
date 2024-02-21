import Image from 'next/image';
import Prashan1 from '../../../../public/jpg1.jpg';

export default function ProjectTemp() {
    return (
        <div className="p-20">
            <div class="bg-white rounded-lg shadow-2xl md:flex">
                <Image 
                 src={Prashan1}
                 alt='project picture'
                 height={50}
                 width={200}
                />


                <div class="p-6">
                    <h2 class="mb-2 font-bold text:xl md:text-2xl text-orange-700">Horizontal Card</h2>
                    <p class="text-orange-700">Look me go sideways</p>
                </div>
            </div>
        </div>
    );
}