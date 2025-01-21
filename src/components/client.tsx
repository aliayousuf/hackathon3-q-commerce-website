import Image from "next/image";

// Define the client item interface
interface ClientItemProps {
  imageSrc: string;
  title: string;
  value: string;
}

// clients data array
const clientData: ClientItemProps[] = [
  {
    imageSrc: "/g1.png",
    title: "Professional Chefs",
    value: "420",
  },
  {
    imageSrc: "/g2.png",
    title: "Items Of Food",
    value: "320",
  },
  {
    imageSrc: "/g3.png",
    title: "Years Of Experienced",
    value: "30+",
  },
  {
    imageSrc: "/g4.png",
    title: "Happy Customers",
    value: "220",
  },
];

const Clients = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <Image
        src="/background2.png"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
        loading="lazy"
      />
      {/* clients Overlay on top of the background */}
      <div className="bg-neutral-950 bg-opacity-90 relative z-10 flex items-center justify-center h-full">
        {/* Responsive clients container */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-16 w-full max-w-screen-lg">
          {clientData.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white font-bold w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
            >
              {/* Responsive clients  Image */}
              
              <Image
                src={client.imageSrc}
                alt={client.title}
                width={50}
                height={50}
                className="object-contain mb-2 sm:w-[60px] sm:h-[50px] md:w-[70px] md:h-[60px] lg:w-[80px] lg:h-[70px]"
                loading="lazy"
              />
              {/* client Title */}
              <div className="text-sm sm:text-base md:text-lg lg:text-xl text-center mt-1">{client.title}</div>
              {/* client Value */}
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-1 leading-tight">{client.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
