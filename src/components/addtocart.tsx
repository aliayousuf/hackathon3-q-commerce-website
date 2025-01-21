"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image";

import { useEffect } from "react";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;

  image: any;
  price_id: string;
}

export default function AddToCart ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick, cartDetails, clearCart } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  // Monitor cartDetails and reset subtotal when the cart is empty
  useEffect(() => {
    // Handle the case where cartDetails is undefined
    const details = cartDetails || {};
    if (Object.keys(details).length === 0) {
      // The cart is empty, so the subtotal will automatically reset to $0
      // If you have a custom implementation, you can reset the subtotal here
      console.log("Cart is empty. Subtotal is now $0.");
    }
  }, [cartDetails]);

  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}