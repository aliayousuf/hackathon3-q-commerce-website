import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  _id: string;
  image: string;
  name: string;
  price: number;
  originalPrice: number;
  available: boolean;
  tags?: string; // Marked as optional
};

export default async function Ourshop() {
  try {
    const products: Product[] = await client.fetch(`
      *[_type=="food"]{
         name,
        image,
        price,
        originalPrice,
        _id,
        available,
        tags
      }
    `);
console.log(products)
    return (
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product._id} href={`/products/${product._id}`}>
              <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="relative w-full aspect-[4/3]">
                  {/* Conditionally render tags if available */}
                  {product.tags && (
                    <div className="absolute top-2 left-2 bg-amber-100 text-amber-800 text-sm font-semibold px-2 py-1 rounded">
                      {product.tags}
                    </div>
                  )}
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-amber-500 font-semibold">
                      Price: ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="line-through text-gray-500 text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="mt-2">
                    <span
                      className={`text-sm font-medium px-2 py-1 rounded ${
                        product.available
                          ? 'bg-black text-amber-500'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {product.available ? 'Available' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    return (
      <div className="text-center mt-20 text-red-500">
        An error occurred while loading the products. Please try again later.
      </div>
    );
  }
}
