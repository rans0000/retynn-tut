"use client";

import { Badge } from "@/components/ui/badge";
import { CartContext } from "@/providers/cart-provider";
import { useContext } from "react";

function HeaderStatus() {
  const { cart } = useContext(CartContext);

  return (
    <div className="heaer-status flex gap-1 items-center">
      <Badge variant="secondary">
        <span className="font-semibold">My Cart</span>
        {cart.total > 0 && (
          <span className="text-right font-mono">
            ({cart.total}) - $ {(cart.sum * cart.discount).toFixed(2)}
          </span>
        )}
      </Badge>
    </div>
  );
}

export default HeaderStatus;
