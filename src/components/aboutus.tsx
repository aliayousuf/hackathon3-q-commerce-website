import Image from "next/image";
import Link from "next/link";

interface ImageData {
  src: string;
  alt: string;
  className: string;
}

const images: ImageData[] = [
  {
    src: "/ab1.png",
    alt: "Food preparation image",
    className: "object-contain w-full rounded-md aspect-[0.63] max-sm:mt-4",
  },
  {
    src: "/ab2.png",
    alt: "Culinary presentation",
    className: "object-contain w-full rounded-md aspect-[1.14] max-sm:mt-4",
  },
  {
    src: "/ab3.png",
    alt: "Dining experience",
    className: "object-contain mt-6 w-full rounded-md aspect-[0.81] max-sm:mt-4",
  },
];

export default function Aboutus() {
  return (
    <div className="p-6 mb-40 max-sm:mb-20">
      <div className="flex gap-8 max-md:flex-col max-sm:gap-6">
        {/* Left Column */}
        <div className="flex flex-col w-[56%] gap-6 max-md:w-full">
          <div className="flex gap-6 max-md:flex-col max-sm:gap-4">
            <div className="w-6/12 max-md:w-full">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                className={images[0].className}
                width={500}
                height={500}
              />
            </div>
            <div className="  flex flex-col  w-6/12 gap-6 max-md:w-full max-sm:gap-4">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                className={images[1].className}
                width={500}
                height={500}
              />
              <Image
                src={images[2].src}
                alt={images[2].alt}
                className={images[2].className}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-[44%] max-md:w-full md:mb-60">
          <div className="flex flex-col self-stretch my-auto">
            <div className="flex items-center gap-2.5 text-lg leading-none text-amber-500">
              <div className="grow">About us</div>
            </div>
            <div className="mt-4 text-5xl font-bold leading-[56px] text-zinc-800 max-md:text-4xl max-md:leading-[52px] max-sm:text-3xl max-sm:leading-[48px]">
              Food is an important part Of a balanced Diet
            </div>
            <div className="mt-8 text-base leading-6 text-neutral-600 max-sm:text-sm max-sm:leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
              augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
              vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 max-sm:mt-6">
            <button
              className="px-12 py-4 text-lg text-white bg-amber-500 rounded-md max-md:px-6 max-sm:px-4 max-sm:py-3"
              aria-label="Show more content"
            >
              <Link href="/shop">Show more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


