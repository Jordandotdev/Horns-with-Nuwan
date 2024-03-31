import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card.jsx";
  import Image from "next/image.js";

  import Facebook from "../../../public/icons/facebook.png";
  import Instagram from "../../../public/icons/instagram.png";
  import Linkedin from "../../../public/icons/linkedin.png";
  import Youtube from "../../../public/icons/youtube.png";

export default function Footer(){
    return(
        <div>
        <footer id="Footer" className="bg-offwhite rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className=" gap-8 sm:flex  sm:justify-between">
                    <div className="flex  mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f3ba.png" className="h-8" alt="Nuwan Logo" />
                        <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">Nuwan</span>
                    </div>

                        
                            <Card>
                            <CardHeader>
                                <CardTitle>Reach Out</CardTitle>
                                <CardDescription>For Further Contact Information</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className=" grid grid-cols-2 xl:grid-cols-4 gap-4   items-center mx-auto max-w-screen-xl">
                                <a href="https://www.facebook.com/hornswithnuwan/" className="flex bg-slate-200 p-2 rounded-md gap-2 transform transition-transform duration-500 ease-in-out hover:scale-105">
                                    <Image
                                        src={Facebook}
                                        alt="Facebook"
                                        width={20}
                                    />
                                    <h2>Facebook</h2>
                                </a>
                                <a href="https://www.instagram.com/horns_with_nuwan/" className="flex bg-slate-200 p-2 rounded-md gap-2 transform transition-transform duration-500 ease-in-out hover:scale-105">
                                    <Image
                                        src={Instagram}
                                        alt="Instagram"
                                        width={20}
                                    />
                                    <h2>Instagram</h2>
                                </a>
                                <a href="https://www.linkedin.com/in/hornswithnuwan/" className="flex bg-slate-200 p-2 rounded-md gap-2 transform transition-transform duration-500 ease-in-out hover:scale-105">
                                    <Image
                                        src={Linkedin}
                                        alt="LinkedIn"
                                        width={20}
                                    />
                                    <h2>LinkedIn</h2>
                                </a>
                                <a href="https://www.youtube.com/c/HornswithNuwan" className="flex bg-slate-200 p-2 rounded-md gap-2 transform transition-transform duration-500 ease-in-out hover:scale-105">
                                    <Image
                                        src={Youtube}
                                        alt="Youtube"
                                        width={20}
                                    />
                                    <h2>Youtube</h2>
                                </a>
                                </div>
                            </CardContent>
                        </Card>


                        <ul className="flex flex-wrap p-2 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="/" className="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="/about-me" className="hover:underline me-4 md:me-6">Self Portrait</a>
                            </li>
                            <li>
                                <a href="/expedition" className="hover:underline me-4 md:me-6">Expeditions</a>
                            </li>
                            <li>
                                <a href="/portfolio" className="hover:underline">Portfolio</a>
                            </li>
                        </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.linkedin.com/in/jordan-ferdinando/" className="hover:underline">Jordan Ferdinando™</a>. All Rights Reserved.</span>
            </div>
        </footer>


        </div>
    );
}