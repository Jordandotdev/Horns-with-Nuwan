import Image from "next/image";
import Mainbg from "../../../public/Hero_background.jpg";

export default function hero() {
    return (
        <div>
            <section >
                <Image
                  src={Mainbg}
                    alt="Main"
                    objectFit="cover"
                    placeholder="blur" 
                />
            </section>
        </div>
    );
}

// className="w-full h-screen bg-cover bg-center bg-no-repeat bg-{Main} relative"