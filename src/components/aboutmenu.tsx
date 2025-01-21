import Link from "next/link";

// Types
interface MenuItem {
  name: string;
  price: string;
  description: string;
  calories: string;
}

interface MenuCategory {
  label: string;
  isActive?: boolean;
}




const menuItems: MenuItem[] = [
  {
    name: 'Alder Grilled Chinook Salmon',
    price: '32$',
    description: 'Toasted French bread topped with romano, cheddar',
    calories: '560 CAL',
  },
  {
    name: 'Alder Grilled Chinook Salmon',
    price: '32$',
    description: 'Toasted French bread topped with romano, cheddar',
    calories: '560 CAL',
  },
  {
    name: 'Alder Grilled Chinook Salmon',
    price: '32$',
    description: 'Toasted French bread topped with romano, cheddar',
    calories: '560 CAL',
  },
  {
    name: 'Alder Grilled Chinook Salmon',
    price: '32$',
    description: 'Toasted French bread topped with romano, cheddar',
    calories: '560 CAL',
  },
];

export default function AboutMenu() {
  return (
    <div className="flex flex-col pt-6 px-4 max-w-screen-lg mx-auto">
      {/* Title Section */}
      <div className="self-center text-4xl md:text-5xl font-bold leading-none text-zinc-800">
        Our Food Menu
      </div>
      <div className="self-center mt-2 text-sm md:text-base leading-6 text-center text-neutral-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Varius sed pharetra dictum neque massa congue
      </div>

      
      

      {/* Divider */}
      <div className="mt-4 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[2px]" />

      {/* Menu Items - Responsive Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-base p-4 border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between text-lg font-bold text-zinc-800 leading-none">
              <div>{item.name}</div>
              <div className="text-amber-500">{item.price}</div>
            </div>
            <div className="mt-2 text-sm text-neutral-600">{item.description}</div>
            <div className="mt-1 text-sm text-zinc-500">{item.calories}</div>
          </div>
        ))}
      </div>

      {/* View Full Menu Button */}
      <button
        className="gap-2.5 self-center px-8 py-3.5 mt-8 text-sm md:text-base text-amber-500 border border-amber-500 rounded-md hover:bg-amber-100 transition-colors mb-8"
        aria-label="View full menu"
      >
        <Link href="/menu">View menu</Link>
      </button>
    </div>
  );
}
