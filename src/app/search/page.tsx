"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import {FaSearch, FaSpinner} from "react-icons/fa";
import { motion } from "framer-motion";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
}

const SearchResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [productResults, setProductResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("q");
    if (query) {
      setSearchQuery(query);
      fetchSearchResults(query);
    }
  }, []);

  const fetchSearchResults = async (query: string) => {
    setIsLoading(true);
    try {
      const productData: Product[] = await client.fetch(
        `*[_type == "food" && name match $searchQuery] {
          _id,
          name,
          "image": image.asset->url,
          price
        }`,
        { searchQuery: `*${query}*` }
      );

      setProductResults(productData);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-center text-amber-500 flex items-center justify-center gap-2"
        >
          <FaSearch className="text-amber-500" /> Search Results for &quot;{searchQuery}&quot;
        </motion.h1>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center h-64"
          >
            <FaSpinner className="animate-spin text-5xl text-amber-600" />
          </motion.div>
        ) : productResults.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {productResults.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 relative overflow-hidden"
                >
                  <Link href={`/products/${product._id}`}>
                    <div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-56 object-cover rounded-t-lg"
                      />
                      <div className="p-4 flex flex-col justify-between">
                        <h2 className="text-lg font-bold text-gray-800 truncate">{product.name}</h2>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xl font-semibold text-amber-600">
                            ${product.price.toFixed(2)}
                          </span>
                          <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-600 text-xl flex flex-col items-center justify-center gap-4 mt-10"
          >
            <p>No products found. Search for something else.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
