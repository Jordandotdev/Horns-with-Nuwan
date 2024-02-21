import Image from "next/image";
import { Button } from "../Components/ui/button.jsx";
import Expeditions from "./components/expedition_temp.js";

export default function projects() {
    return(
        <section className="mt-14">
            <div id="main_port" className="item-center bg-white">
                <div className=" flex  mb-4 justify-center text-5xl pt-6 px-4 mx-auto max-w-screen-xl font-extrabold text-gray-900 dark:text-white">
                Exploratory Projects 
                </div> 
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                        <Expeditions />
                        <Expeditions />
                        <Expeditions />
                        <Expeditions />
                    </div>
                
                <div className="flex justify-center items-center p-4 text-4xl  mx-auto max-w-screen-xl">
                    <a href="/portfolio">
                    <Button className="mt-4" >View More</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}