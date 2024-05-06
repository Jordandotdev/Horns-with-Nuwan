import Image from "next/image";
import Nuwan3 from "../../../../public/Nuwan3.jpg";
import config from "../../../config.js";

const fetchPortrait = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-store",
  };
  const response = await fetch(
    `${config.api}/api/biography?populate=*`,
    reqOptions
  );
  const resData = await response.json();
  console.log("Portrait: ", resData.data);
  return resData;
};

const selfPortrait = async () => {
  const portrait = await fetchPortrait();
  const ImageURL1 = portrait.data.attributes.Image.data.attributes.url;

  return (
    <section className="bg-offwhite px-4 py-4 mt-14">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Biography
          </h2>
          <p className="mb-4">{portrait.data.attributes.Paragraph1}</p>
          <p>{portrait.data.attributes.Paragraph2}</p>
          {/* <Button className="mt-4">Download Resume</Button> */}
        </div>
        <div className="relative h-screen max-h-[400px] sm:max-h-[600px] lg:max-h-[700px] max-w-1/3 sm:max-w-1/2 aspect-w-16 aspect-h-9">
          <Image
            className="rounded-lg  object-cover object-top "
            src={`${config.api}${ImageURL1}`}
            fill={true}
            quality={75}
            alt="Image description"
          />
        </div>
      </div>
    </section>
  );
};

export default selfPortrait;
