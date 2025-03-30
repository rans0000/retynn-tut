"use client";

import { logoutUser } from "@/actions/auth-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartContext } from "@/providers/cart-provider";
import { useContext } from "react";

function HeaderStatus() {
  const { cart, dispatch } = useContext(CartContext);

  const onLogout = async () => {
    // we'll use the server actions to clear the auth cookie & route to '/login'
    dispatch({ type: "reset_items" });
    await logoutUser();
  };

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
      <Separator decorative orientation="vertical" />
      <Button
        type="button"
        variant="link"
        className="cursor-pointer"
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
}

export default HeaderStatus;
