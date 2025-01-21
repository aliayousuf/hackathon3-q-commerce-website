import React from "react";
import Image from "next/image";

const foodCategories = [
  {
    imageSrc: "/fastfood.png",
    title: "Fast Food",
    alt: "Fast food category icon",
  },
  {
    imageSrc: "/lunch.png",
    title: "Lunch",
    alt: "Lunch category icon",
  },
  {
    imageSrc: "/dinner.png",
    title: "Dinner",
    alt: "Dinner category icon",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="mt-11 flex flex-col gap-10 p-6 sm:p-8 bg-neutral-950 text-white rounded-md">
      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Image Section */}
        <div className="flex flex-wrap justify-between gap-5 w-full lg:w-2/3">
          <Image
            src="/c3.png"
            alt="Restaurant ambiance"
            width={400}
            height={300}
            className="rounded-md w-full sm:w-auto  md:w "
          />
          <Image
            src="/food2.png"
            alt="Signature dish"
            width={400}
            height={300}
            className="object-contain w-full rounded-md aspect-[1.22] max-w-[281px] sm:mr-10 sm:mt-5 lg:mr-60 lg:mt-20"
          />
          <Image
            src="/c1.png"
            alt="Featured menu item"
            width={300}
            height={300}
            className="rounded-md w-full sm:w-auto"
          />
          <Image
            src={"/c2.png"}
            alt="Creative plating"
            width={400}
            height={300}
            className="object-contain w-full rounded-md aspect-[0.98] max-w-[221px] sm:mb-5 lg:mb-40"
          />
          <div className="flex flex-col sm:mr-10 lg:mr-48">
            <Image
              src={"/c5.png"}
              alt="Elegant dessert"
              width={400}
              height={300}
              className="object-contain w-full rounded-md aspect-[0.96] max-w-[161px] mb-2"
            />
            <Image
              src={"/c4.png"}
              alt="Exquisite presentation"
              width={400}
              height={300}
              className="object-contain w-full rounded-md aspect-[0.97] max-w-[161px] mt-2"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          {/* Place the heading4 image above the heading */}
          <div className="flex justify-start mb-4 sm:mb-6">
            <Image
              src={"/heading4.png"}
              alt="Heading image"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="text-start mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white">
              <span className="text-amber-500">Extra</span>ordinary Taste
              <br />
              And Experience
            </h2>
          </div>
          <p className="text-sm sm:text-base leading-6 mb-6 mr-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {foodCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-amber-500 rounded-md"
              >
                <Image
                  src={category.imageSrc}
                  alt={category.alt}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <span className="mt-2 text-xs sm:text-sm">{category.title}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-4 sm:h-24 rounded-md pl-4" />
            <div className="rounded-md bg-white">
              <div className="text-lg sm:text-5xl font-bold text-amber-500">
                30+
              </div>
              <div className="text-black text-sm sm:text-2xl">Years of Experienced</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;