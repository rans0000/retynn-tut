"use client";

import { isLoggedIn, logoutUser } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/providers/cart-provider";
import { useContext, useEffect, useState } from "react";

function LogoutBtn() {
  const { dispatch } = useContext(CartContext);
  const [isUser, setIsUser] = useState(false);

  const onLogout = async () => {
    // we'll use the server actions to clear the auth cookie & route to '/login'
    try {
      dispatch({ type: "reset_items" });
      await logoutUser();
    } catch {}
  };

  useEffect(() => {
    isLoggedIn().then((isSuccess) => setIsUser(isSuccess));
  }, []);

  return (
    <>
      {isUser ? (
        <Button
          type="button"
          variant="link"
          className="cursor-pointer"
          onClick={onLogout}
        >
          Logout
        </Button>
      ) : null}
    </>
  );
}

export default LogoutBtn;
