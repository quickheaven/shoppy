"use client";

import { Button } from "@mui/material";
import checkout from "./actions/checkout";

interface CheckoutProps {
  productId: number;
}

export default function Checkout({ productId }: CheckoutProps) {
  const handleCheckout = async () => {
    const session = await checkout(productId);
    // Redirect the user to the session URL
    if (session.data?.url) {
      window.location.href = session.data.url;
    } else {
      // Handle the case where the session URL is not available
      console.error("Stripe Checkout session URL is missing.");
      // Optionally, show an error message to the user
    }
  };

  return (
    <Button
      variant="contained"
      className="max-w-[25%]"
      onClick={handleCheckout}
    >
      Buy Now
    </Button>
  );
}