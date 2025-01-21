import Image from "next/image";

const partnersData = [
  {
    src: "/p1.png",
    width: 241,
    height: 129,
    alt: "Partner company logo",
  },
  {
    src: "/p2.png",
    width: 166,
    height: 128,
    alt: "Partner company logo",
  },
  {
    src: "/p3.png",
    width: 144,
    height: 128,
    alt: "Partner company logo",
  },
  {
    src: "/p4.png",
    width: 131,
    height: 128,
    alt: "Partner company logo",
  },
  {
    src: "/p6.png",
    width: 170,
    height: 128,
    alt: "Partner company logo",
  },
  {
    src: "/p5.png",
    width: 114,
    height: 128,
    alt: "Partner company logo",
  },
];

export default function Partner() {
  return (
    <div className="flex flex-col items-center px-6 mt-6">
      {/* Heading */}
      <h2 className="text-lg text-zinc-800">Partners & Clients</h2>
      <h1 className="mt-2 text-5xl font-bold text-zinc-800 max-md:text-4xl">
        We work with the best people
      </h1>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 w-full mb-10 max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:justify-items-center">
        {partnersData.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
