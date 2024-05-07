import Image from "next/image";
import Mainbg from "../../../public/Hero_background.jpg";

export default function hero() {

    return (
        <div>
            <section>
                <Image
                    src={Mainbg}
                    alt="Main"
                    //write a funciton instead of the blur for a spinner with the quote
                    placeholder="blur"
                    className="w-full h-screen object-cover object-center"
                />
            </section>
        </div>
    );
}