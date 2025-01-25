
"use client";
import { MdOutlineMenu } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { PiHandbagLight } from "react-icons/pi";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { cartDetails, handleCartClick } = useShoppingCart();

  // Calculate the total number of items in the cart
  const totalItems = Object.values(cartDetails || {}).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    // Redirect to the search results page
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <header className="flex justify-between items-center p-4 md:py-[30px] md:px-[54px] bg-neutral-950 relative z-10 min-h-[90px]">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold leading-none ml-4 md:ml-40">
        <span className="text-amber-500">Food</span>
        <span className="text-white">tuck</span>
      </div>

      {/* Desktop Links */}
      <nav className="hidden md:block">
        <ul className="flex gap-x-5 text-sm text-white">
          <li className="cursor-pointer font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Right-Side Icons */}
      <div className="hidden md:flex items-center gap-6">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
          />
          <button type="submit" className="absolute right-2 top-2">
            <FiSearch className="text-lg cursor-pointer mt-1 text-amber-500" />
          </button>
        </form>

        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg mt-2 rounded-md z-50">
            <ul className="py-2">
              {searchResults.map((product) => (
                <li key={product._id} className="px-4 py-2 hover:bg-gray-100">
                  <Link
                    href={`/products/${product._id}`}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link href="/signup">
          <CiUser className="text-white text-2xl" />
        </Link>
        <button onClick={handleCartClick} className="relative">
          <PiHandbagLight className="text-white text-2xl" />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="flex items-center gap-2 md:hidden">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-32 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
          />
          <button type="submit" className="absolute right-2 top-1.5">
            <FiSearch className="text-lg cursor-pointer text-amber-500" />
          </button>
        </form>
        <button onClick={handleCartClick} className="relative">
          <PiHandbagLight className="text-white text-2xl" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>
        <button onClick={toggleMenu}>
          <MdOutlineMenu className="text-2xl text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white text-gray-600 font-semibold z-50 transition-all ease-in-out duration-300 shadow-md">
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-center">
            <li className="hover:text-amber-500 transition-all">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-amber-500 transition-all">
              <Link href="/menu" onClick={toggleMenu}>
                Menu
              </Link>
            </li>
            <li className="hover:text-amber-500 transition-all">
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="hover:text-amber-500 transition-all">
              <Link href="/shop" onClick={toggleMenu}>
                Shop
              </Link>
            </li>
            <li className="hover:text-amber-500 transition-all">
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li className="hover:text-amber-500 transition-all">
              <Link href="/signup" onClick={toggleMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
