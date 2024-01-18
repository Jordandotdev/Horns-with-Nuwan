import Image from 'next/image';
import Prashan1 from "../../../public/jpg1.jpg";


export default function AboutMe() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Me</h2>
                    <p className="mb-4">
                    Welcome to the vibrant world of Prashan, the trumpeter extraordinaire! 🎺 Embark on a musical journey that transcends boundaries and ignites the soul. With a passion for creating enchanting melodies, Prashan brings a unique blend of skill, charisma, and innovation to every performance. Whether it's jazz, classical, or contemporary genres, Prashan's trumpet resonates with a brilliance that captivates audiences far and wide. Elevate your events with the magical sounds of Prashan's trumpet, turning ordinary moments into extraordinary memories. Book now for an unforgettable musical experience that will leave a lasting imprint on your heart and soul
                    </p>
                    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                </div>
                <div className="relative w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105">
                    <Image
                        className="rounded-lg"
                        src={Prashan1}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 0%"
                    />
                </div>
            </div>
        </section>
    );
}
