import Image from "next/image";
import Link from "next/link";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";
import { PiGreaterThanThin } from "react-icons/pi";




export default function LoginPage() {
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
      Login Page
    </span> 

    {/* Breadcrumb Navigation */}
    <div>
      <div className="flex font-poppins items-center text-sm md:text-base">
        <Link className="text-white flex items-center gap-1" href={"/"}>
          Home
        </Link>
        <PiGreaterThanThin  className="text-white"/>
        <span className="text-amber-500 font-bold capitalize">Login</span>
      </div>
    </div>
  </div>
  </div>
   {/* Form */}
   <div className="flex flex-col text-base max-w-sm mx-auto mt-8 md:mt-12 bg-white shadow-md rounded-lg p-6 mb-16 max-sm:px-4">
        {/* Header */}
        <h1 className="text-xl font-bold text-gray-700 mb-4 text-center md:text-2xl">Login</h1>

        {/* Input Fields */}
        <div className="space-y-3 max-sm:space-y-2">
          

          {/* Email Field */}
          <div className="flex items-center border border-solid border-neutral-200 rounded-md px-3 py-2">
            <FaEnvelope className="text-gray-400 w-5 h-5" />
            <input
              className="ml-2 w-full bg-transparent focus:outline-none"
              type="email"
              placeholder="Email"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border border-solid border-neutral-200 rounded-md px-3 py-2">
            <FaLock className="text-gray-400 w-5 h-5" />
            <input
              className="ml-2 w-full bg-transparent focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-2 mt-2 max-sm:text-sm">
          <input type="checkbox" id="remember" className="w-4 h-4" />
          <label htmlFor="remember" className="text-sm text-gray-600">Remember me?</label>
        </div>

        {/* Submit Button */}
        <button
          className="w-full mt-3 bg-amber-500 text-white py-2 rounded-md hover:bg-yellow-500 transition"
          type="submit"
        >
          Login
        </button>
        <button className="self-stretch my-auto text-red-500">
          Forget Password?
          </button>
          </div>
   


      </main>
    );
  }