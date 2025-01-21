import Image from 'next/image';
import Link from 'next/link';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";

export default function Footer() {
  const helpLinks = ['FAQ', 'Terms & Conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'];
  

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="self-start text-3xl font-bold text-white mb-4 md:mb-0">
            <span className="text-amber-500">St</span>ill You Need Our Support?
            <p className="mt-2 text-base leading-6 text-white max-w-lg">
              Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty easy.
            </p>
          </div>

          {/* Subscription Form */}
          
     <div className="flex flex-col flex-1 text-base">
     <form className=" flex gap-5 items-center bg-amber-500 rounded pl-5 w-[90%] sm:w-[459px] md:ml-60 ml-0">
    <label htmlFor="emailInput" className="sr-only">
      Enter your email
    </label>
    <input
      type="email"
      id="emailInput"
      placeholder="Enter Your Email"
      className=" flex-1 bg-transparent text-white placeholder-opacity-80 outline-none w-32 md:w-auto py-0"
      required
    />
    <button
      type="submit"
      className=" px-2 py-1 md:px-6 md:py-4 text-amber-500 bg-white rounded"
    >
      Subscribe Now
    </button>
  </form>
      </div> 
       </div>
       <hr className="mt-16 border-t-2 border-[#FF9F0D]" />

        {/* Links and Posts */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="mt-4 text-sm">
              Corporate clients and leisure travelers have relied on our dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className="mt-6 flex gap-2">
              <Image
                src="/watch.png"
                alt="Opening Hours Icon"
                width={78}
                height={78}
                className="object-cover"
              />
              <div>
                <h4 className="font-bold">Opening Hours</h4>
                <p>Mon-Sat:8.00AM-6.00PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="#"></Link>News</li>
              <li><Link href="#"></Link>Partners</li>
              <li><Link href="#"></Link>Team</li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              </ul>
             </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xl font-bold">Help</h3>
            <ul className="mt-4 space-y-2">
              {helpLinks .map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

         
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-8 w-full text-base bg-neutral-600">
        {/* Copyright Text */}
        <p className="text-white text-center md:text-left">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
        
        {/* Social Media Links with added margin */}
        <div className="flex gap-4 mt-4 md:mt-0 md:pr-40">
          <Link
            href="#"
            className="p-2 bg-white rounded text-black hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
            <TiSocialFacebook />
          </Link>
          <Link
            href="#"
            className="p-2 bg-white rounded text-black hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
            <FaTwitter />
          </Link>
          <Link
            href="#"
            className="p-2 bg-white rounded text-black hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
            <IoLogoInstagram />
          </Link>
          <Link
            href="#"
            className="p-2 bg-white rounded text-black hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
            <AiOutlineYoutube />
          </Link>
          <Link
            href="#"
            className="p-2 bg-white rounded text-black hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
            <IoLogoPinterest />
          </Link>
        </div>
      </div>
    </footer>
  );
}






