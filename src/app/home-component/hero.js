import Image from "next/image";
import Mainbg from "../../../public/Hero_background.jpg";
import { Suspense } from "react";

export default function hero() {
    return (
        <div>
            <section >
                <Suspense fallback={<div>Loading...</div>}>
                <Image
                  src={Mainbg}
                    alt="Main"
                    placeholder="blur" 
                    className="w-full h-screen object-cover object-center "
                />
                </Suspense>
            </section>
        </div>
    );
}

// className="w-full h-screen bg-cover bg-center bg-no-repeat bg-{Main} relative"