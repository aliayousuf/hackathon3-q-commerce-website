"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image";
import { ProductCart } from "./addtocart";

export default function Checkout({

  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  
  const { checkoutSingleItem } = useShoppingCart();
  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button className="bg-yellow-400"
      variant="outline"
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout
    </Button>
  );
}


