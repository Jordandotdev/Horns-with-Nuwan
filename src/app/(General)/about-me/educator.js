import Image from "next/image";
import Educator from "../../../../public/educator.jpg";
import config from "../../../config.js";

const fetchEducator = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-store",
  };
  const response = await fetch(
    `${config.api}/api/an-educator?populate=*`,
    reqOptions
  );
  const resData = await response.json();
  console.log("Educator: ", resData.data);
  return resData;
};

const educator = async () => {
  const educator = await fetchEducator();
  const ImageURL1 = educator.data.attributes.Image.data.attributes.url;

  return (
    <section className="bg-offwhite px-4 py-4 ">
      <div className="gap-16 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">
        <div className="relative h-screen max-h-[400px] sm:max-h-[600px] lg:max-h-[700px] max-w-1/3 sm:max-w-1/2 aspect-w-16 aspect-h-9">
          <Image
            className="rounded-lg  object-cover object-top "
            src={`${config.api}${ImageURL1}`}
            fill={true}
            quality={75}
            alt="Image description"
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            An Educator
          </h2>
          <p className="mb-4">{educator.data.attributes.Paragraph1}</p>
          <p>{educator.data.attributes.Paragraph2}</p>
        </div>
      </div>
    </section>
  );
};

export default educator;
