import Image from "next/image";
import Mainbg from "../../public/Hero_background.jpg";

export default function hero() {
    return (
        <div>
            <section  priority={true} className="w-full h-screen bg-cover bg-center bg-no-repeat bg-{Main} relative">
                <div className="flex flex-col justify-end pb-4 px-10 max-w-screen-xl text-left lg:pl-20 h-full">
                    {/* <p className="mb-8 text-base sm:text-lg font-normal text-gray-300 lg:text-xl">
                    A true musician is someone who nourishes the souls of people with the music created with a purpose, and his journey should ideally be to become an artist with a distinct sound and a professional with great versatility
                    </p> */}
                </div>
            </section>
        </div>
    );
}