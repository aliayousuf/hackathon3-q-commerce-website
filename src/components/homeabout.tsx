import Image from "next/image";
import Link from "next/link";
import ListItem from "./listitem";



interface ListItemProps {
  text: string;
}

interface AboutContentData {
  items: ListItemProps[];
}

const contentData: AboutContentData = {
  items: [
    {
      text: "Lacus nisi, et ac dapibus sit eu velit in consequat.",
    },
    {
      text: "Quisque diam pellentesque bibendum non dui volutpat fringilla",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ],
};

export default function Homeabout() {
  return (
    <div className="flex flex-col md:flex-row items-start mt-20 px-4 sm:px-6 md:px-16 py-12 sm:py-16 bg-neutral-950 text-white">
      {/* Left Content */}
      <div className="flex-1">
        <div>
          <Image
            src={"/heading2.png"}
            alt="heading image"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-amber-500">We</span> Create the Best <br />
          Foody Product
        </div>
        <div className="flex flex-col mt-8 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:gap-6">
          {contentData.items.map((item, index) => (
            <ListItem key={index} text={item.text} />
          ))}
        </div>
        <Link href={"/about"}>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 mt-12 mb-6 bg-amber-500 text-neutral-900 rounded-full text-base sm:text-lg"
          >
            Read More
          </button>
        </Link>
      </div>

      {/* Right Images */}
      <div className="flex flex-col gap-6 w-full md:w-[50%] items-center">
        {/* First Image */}
        <Image
          src="/about1.png"
          alt="About image 1"
          width={697}
          height={697}
          className="object-contain w-full rounded-md max-w-[697px]"
          priority
        />

        {/* Second and Third Images */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
          <Image
            src="/about2.png"
            alt="About image 2"
            width={340}
            height={340}
            className="object-contain w-full sm:w-[48%] rounded-md"
          />
          <Image
            src="/about3.png"
            alt="About image 3"
            width={340}
            height={340}
            className="object-contain w-full sm:w-[48%] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
