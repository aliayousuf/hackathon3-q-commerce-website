import Image from "next/image";

export default function MenuSection() {
  const menuItems = [
    { title: "Lettuce Leaf", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55", image: "/m1.png" },
    { title: "Fresh Breakfast", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55", image: "/m2.png" },
    { title: "Mild Butter", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55", image: "/m3.png" },
    { title: "Fresh Bread", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55", image: "/m4.png" },
    { title: "Glow Cheese", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55", image: "/m5.png" },
    { title: "Italian Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.55", image: "/m8.png" },
    { title: "Slice Beef", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55", image: "/m7.png" },
    { title: "Mushroom Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55", image: "/food2.png" },
  ];

  return (
    <div className="bg-neutral-950 text-white py-10 px-4">
      {/* Section Header */}
      
      <div className="flex flex-col justify-center items-center space-y-4">
  {/* Image on top */}
  <div>
    <Image
      src="/heading5.png"
      alt="heading image"
      width={100}
      height={100}
      className="object-contain"
    />
  </div>

  {/* Text under the image */}
  <h1 className="text-4xl font-bold text-center">
    From <span className="text-amber-500">Our Menu</span>
  </h1>
</div>

 
      {/* Content Section */}
      <div className="flex flex-wrap justify-center lg:justify-between items-center mt-10 gap-10">
        {/* Left Image with Overlapping Image */}
        <div className="relative flex-shrink-0">
  {/* Main Image */}
  <Image
    src="/leave.png" 
    alt="Dish"
    width={600}
    height={300}
    className="rounded-full hidden sm:block "  // Hidden on small screens, visible on medium and larger screens
  />
  
  {/* Secondary Overlapping Image */}
  <Image
    src="/plate.png"
    alt="Decorative Dish"
    width={350}
    height={100}
    className="hidden sm:block   absolute bottom-10 ml-24  lg:right-28 rounded-full border-4 border-white z-10"
  />
</div>


        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Menu Item Image */}
              <Image
                src={item.image} 
                alt={item.title}
                width={80}
                height={80}
                className="rounded-lg"
              />

              {/* Menu Item Details */}
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <span className="text-amber-500 font-bold">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
