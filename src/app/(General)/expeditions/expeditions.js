import Image from "next/image";
import { Button } from "../../Components/ui/button.jsx";
import config from "../../../config.js";
import Arrow from "../../../../public/icons/right-arrow-svgrepo-com.svg";

const fetchExpeditions = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-store",
  };
  const response = await fetch(`${config.api}/api/expedition?populate=*`, reqOptions);
  const resData = await response.json();
  console.log("Expeditions: ", resData.data);
  return resData;
};

const expeditions = async () => {
  const Expeditions = await fetchExpeditions();
  const ImageURL1 = Expeditions.data.attributes.Image.data.attributes.url;
  return (
    <section className="bg-offwhite px-4 py-4 mt-16">
      <div className="gap-16 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">
        <div className="relative h-screen max-h-[400px] sm:max-h-[700px] lg:max-w-[450px] aspect-w-1 aspect-h-1 mt-2 md:mt-4">
          <Image
            className="rounded-lg object-cover object-center"
            fill={true}
            src={`${config.api}${ImageURL1}`}
            quality={75}
            alt="Image description"
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Expeditions
          </h2>
          <p className="mb-4">{Expeditions.data.attributes.Paragraph1}</p>
          <p>{Expeditions.data.attributes.Paragraph2}</p>
          <a href="#Exploratory">
            <Button className="mt-4">
              <Image
                src={Arrow}
                alt="Arrow"
                className="h-8 w-8 inline-block p-1"
              />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default expeditions;
