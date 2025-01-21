import Image from "next/image";
import { TbSalad } from "react-icons/tb";


interface MenuItem {
  name: string;
  price: string;
  description: string;
  calories: string;
}

// Menu data
const menuItems: MenuItem[] = [
  {
    name: "Alder Grilled Chinook Salmon",
    price: "$32",
    description: "Toasted French bread topped with romano, cheddar",
    calories: "560 CAL",
  },
  {
    name: "Berries and Creme Tart",
    price: "$43",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: "700 CAL",
  },
  {
    name: "Tormentoso Bush Pizza Pintoage",
    price: "$14",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: "1000 CAL",
  },
  {
    name: "Spicy Vegan Potato Curry",
    price: "$35",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: "560 CAL",
  },
];

export default function StarterMenu() {
  return (
    <div className="container mx-auto mt-2 px-6 max-w-screen-lg">
      {/* Main Grid Row */}
      <div className="grid grid-cols-12 gap-6 max-md:flex max-md:flex-col items-start">
        {/* Left Section - Centered & Adjusted Image */}
        <div className="col-span-4 flex justify-center items-center mt-10 max-md:w-full max-md:mt-4">
          <Image
            src="/menu1.png"
            alt="Restaurant ambiance"
            width={700}
            height={1000}
            className="object-cover w-full h-auto max-sm:w-[90%]"
            priority
          />
        </div>

        {/* Right Section - Menu Text */}
        <div className="col-span-8 bg-white shadow-lg p-6 rounded-lg max-md:w-full max-md:mt-6">
          <div className="w-full text-left">
            {/* Heading */}
            <div className="flex flex-col justify-center items-start gap-2 mb-4">
              {/* Coffee Icon */}
              <TbSalad className="text-amber-500 text-3xl max-sm:text-2xl" />
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 max-sm:text-3xl">
                Starter Menu
              </h1>
            </div>

            {/* Menu Items - Left-Aligned */}
            <div className="mt-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="mt-4 border-b border-neutral-300 pb-4 last:border-none"
                >
                  {/* Menu Name & Price */}
                  <div className="flex justify-between text-lg font-bold text-zinc-800 max-sm:text-base">
                    <span>{item.name}</span>
                    <span className="text-amber-500">{item.price}</span>
                  </div>

                  {/* Description & Calories */}
                  <p className="mt-1 text-neutral-600 text-sm max-sm:text-xs">
                    {item.description}
                  </p>
                  <p className="mt-1 text-zinc-500 text-sm max-sm:text-xs">
                    {item.calories}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
