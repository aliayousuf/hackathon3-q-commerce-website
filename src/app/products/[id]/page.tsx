 import AddToCart from '@/components/addtocart';
import Checkout from '@/components/checkout';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface Params {
  params: {
    id: string;
  };
}

interface FullProduct {
  _id: string;
  image: any;
  price: number;
  originalPrice: number;
  name: string;
  description: string;
  available: boolean;
  tags?: string;
  price_id: string;
}

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: Params) {
  const { id } = params;

  try {
    // Fetch product details by `_id`
    const product: FullProduct = await client.fetch(
      `*[_type=="food" && _id == $id][0]{
        name,
        image,
        price,
        originalPrice,
        _id,
        available,
        description,
        tags,
        price_id
      }`,
      { id }
    );

    if (!product) {
      return (
        <div className="text-center mt-20 text-gray-500">
          Product not found.
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <div className="w-full lg:w-1/2 relative">
            {/* Tags displayed on the left side of the image */}
            {product.tags && (
              <div className="absolute top-2 left-2 bg-amber-100 text-amber-800 text-sm font-semibold px-2 py-1 rounded">
                {product.tags}
              </div>
            )}
            <div className="aspect-w-1 aspect-h-1 w-full max-w-sm mx-auto lg:max-w-full">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-md object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
              {product.name}
            </h1>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-4">
              <p className="text-lg sm:text-xl text-amber-500 font-semibold">
                Price: ${product.price}
              </p>
              {product.originalPrice > product.price && (
                <p className="text-sm sm:text-base text-gray-500 line-through">
                  Original: ${product.originalPrice}
                </p>
              )}
            </div>
            <p className="text-gray-700 text-center lg:text-left mb-6 text-sm sm:text-base">
              {product.description}
            </p>
            <div className="mb-6 text-center lg:text-left">
              <span
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded ${
                  product.available
                    ? 'bg-black text-amber-500 '
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {product.available ? 'Available' : 'Out of Stock'}
              </span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              <AddToCart
                currency="USD"
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                key={product._id}
                price_id={product.price_id}
              />

              <Checkout
                currency="USD"
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                key={product._id}
                price_id={product.price_id}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);

    return (
      <div className="text-center mt-20 text-red-500">
        An error occurred while loading the product. Please try again later.
      </div>
    );
  }
}





