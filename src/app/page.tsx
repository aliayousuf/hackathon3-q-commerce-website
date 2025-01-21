import Image from "next/image";
import WhyChooseUs from "@/components/chooseus";
import Menu from "@/components/menu";
import Clients from "@/components/client";
import Homeabout from "@/components/homeabout";
import Link from "next/link";
export const dynamic = "force-dynamic";


export default function Home() {
  return (
    <div className="bg-neutral-950">
    
<div
  className="flex flex-col bg-cover bg-center bg-no-repeat w-full h-auto bg-neutral-950 bg-opacity-100"
  style={{
    backgroundImage: "url('/background1.png')",
  }}
>
  
  {/* Hero Section */}
  <div className="flex flex-col md:flex-row items-center pt-9 max-w-[1200px] mx-auto">
    {/* Hero Left Content Section */}
    <div className="flex flex-col items-start text-base text-white max-w-[472px] rounded-[30px]">
      <div>
        <Image
          src="/heading1.png"
          alt="heading image"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="ml-6 self-stretch mt-2 w-full text-5xl md:text-6xl  font-bold leading-[68px]">
        <span className=" text-amber-500">Th</span>e Art of Speed
        <br />
        Food Quality
      </div>
      <div className="mt-8 leading-6 ml-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Varius sed pharetra dictum neque massa congue.
      </div>
      <Link href={"/menu"}>
      <button
        className="ml-6 sm:mb-4  px-14 py-5 mt-8 bg-amber-500 rounded-[30px] text-neutral-200"
        tabIndex={0}
        aria-label="See Menu"
      >
        See Menu
      </button>
      </Link>
    </div>

    {/* Hero Right Image Section */}
    <div className="flex flex-col items-start pt-9 max-w-[878px] md:pl-5">
      <Image
        src="/heroimage.png"
        alt="hero image"
        width={699}
        height={634}
        className="object-contain flex shrink-0 w-full h-auto max-w-full"
      />
    </div>
  </div>
</div>


{/* about us */}
      <div className="bg-neutral-950">
         <Homeabout/> 
      </div>
     
  
   

    {/* why choose us */}
      <div className="bg-neutral-950">
     <WhyChooseUs/></div> 

{/* clients */}

 <div>
  <Clients/>
</div> 

{/* menu */}
 <div>
  <Menu/>
</div> 






     </div>

  
);
}


