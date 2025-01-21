import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contactform";
import {  FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, } from 'react-icons/fa';
import { PiGreaterThanThin } from "react-icons/pi";




export default function ContactPage() {
    return (
      <main>
        
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
      Contact Us
    </span> 

    {/* Breadcrumb Navigation */}
    <div>
      <div className="flex font-poppins items-center text-sm md:text-base">
        <Link className="text-white flex items-center gap-1" href={"/"}>
          Home
        </Link>
        <PiGreaterThanThin  className="text-white"/>
        <span className="text-amber-500 font-bold capitalize">Contact</span>
      </div>
    </div>
  </div>
  </div>

  <div className="p-8 max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-12">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>

      {/* Contact Information */}
      <div className="space-y-8">
        {/* Phone */}
        <div>
          <h2 className="text-xl font-semibold flex items-center text-gray-800">
            <FaPhoneAlt className="mr-2 text-blue-500" /> Number
          </h2>
          <p className="text-gray-600">+1 (234) 567-890</p>
        </div>

        {/* Email */}
        <div>
          <h2 className="text-xl font-semibold flex items-center text-gray-800">
            <FaEnvelope className="mr-2 text-green-500" /> Email Address
          </h2>
          <p className="text-gray-600">contact@example.com</p>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-xl font-semibold flex items-center text-gray-800">
            <FaMapMarkerAlt className="mr-2 text-red-500" /> Store Location
          </h2>
          <p className="text-gray-600">123 Main Street, Cityville</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6">
        <Link href={"https://www.facebook.com"}><FaFacebook className="text-blue-700 text-2xl cursor-pointer hover:scale-110 transition-transform" /></Link>
        <Link href={"https://www.instagram.com"}><FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:scale-110 transition-transform" /></Link>
        <Link href={"https://www.linkedin.com"}><FaLinkedin className="text-blue-500 text-2xl cursor-pointer hover:scale-110 transition-transform" /></Link>
        <Link href={"https://www.twitter.com"}><FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:scale-110 transition-transform" /></Link>
      </div>


  <div className="p-4 max-w-3xl mx-auto  ">
        <h1 className="text-3xl font-bold text-black flex items-center justify-center">Get In Touch</h1>
        <p className="text-black flex items-center justify-center">please fill in the form below</p>

        <ContactForm/>
        
      </div>
      </div>
     

  


      </main>
    );
  }