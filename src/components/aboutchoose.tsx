import React from "react";
import Image from "next/image";
import { PiCoffeeLight } from "react-icons/pi";
import { PiPerson } from "react-icons/pi";
import { PiChefHat } from "react-icons/pi";




const features  = [
  {
    icon: <PiChefHat className="w-10 h-10"/>,
    title: "Best Chef",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
  },
  {
    icon: <PiCoffeeLight  className="w-10 h-10" />,
    title: "120 Item Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
  },
  {
    icon: <PiPerson className="w-10 h-10" />,
    title: "Clean Environment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
  },
];

 export default function AboutChoose()  {
  return (
    <div className="flex flex-col items-center px-6 pb-16">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-zinc-800 text-center max-md:text-3xl">
        Why Choose Us
      </h2>
      <p className="mt-4 text-base leading-6 text-center text-neutral-600 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
      </p>

      {/* Illustration */}
      <div className="relative w-full h-60 mt-10 max-w-4xl max-md:h-48">
        <Image
          src="/ab4.png"
          alt="Why Choose Us Illustration"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Feature Cards */}
      <div className="mt-14 flex flex-wrap justify-center gap-8 max-md:mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 w-80 bg-white rounded-lg shadow-md max-md:w-full"
          >
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold text-zinc-800">{feature.title}</h3>
            <p className="mt-4 text-base text-neutral-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


