import Image from "next/image";
import Link from "next/link";
import Aboutus from "@/components/aboutus";
import AboutChoose from "@/components/aboutchoose";
import AboutMenu from "@/components/aboutmenu";
import { PiGreaterThanThin } from "react-icons/pi";



export default function Aboutpage() {
    return (
      <>
        
      
      
      {/* background image */}
          <div className="relative flex justify-center items-center w-full h-[410px] max-md:h-[300px]">
      <Image
    src={"/menubg.png"}
    alt="shop hero image"
    width={1920} 
    height={410} 
    className="object-cover w-full h-80 mb-32"
  />
  <div className="absolute flex flex-col gap-2 items-center mb-32">
    {/* Heading */}
     <span className="font-poppins text-white text-2xl md:text-4xl font-medium">
      About Us
    </span> 

    {/* Breadcrumb Navigation */}
    <div>
      <div className="flex font-poppins items-center text-sm md:text-base">
        <Link className="text-white flex items-center gap-1" href={"/"}>
          Home
        </Link>
        
        <PiGreaterThanThin  className="text-white"/>
        <span className="text-amber-500 font-bold capitalize">About Us</span>
      </div>
    </div>
  </div>
  </div>
  {/* about us */}
  <div>
  <Aboutus/>
  </div>
  {/* about choose us */}
  <div>
    <AboutChoose/>
  </div>
  
  
  {/* about menu */}
  <AboutMenu/>

      </>
    );
  }
  