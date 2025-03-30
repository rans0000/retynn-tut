"use client";

import { TCartAction, TCartState } from "@/lib/types";
import { getCartCalculation } from "@/lib/utils";
import React, { ActionDispatch, createContext, useReducer } from "react";

/**
 * This file contains the context and the provider
 * We'll wrap the propvider over the app/layout.tsx so all children elements can access our data with the 'useContext' hook.
 */

type TProps = { children: React.ReactNode };
type TSore = {
  cart: TCartState;
  dispatch: ActionDispatch<[action: TCartAction]>;
};

// this is the cart value
const initialValue: TCartState = { items: [], sum: 0, total: 0, discount: 0 };
// this is the value passed to the context
export const CartContext = createContext<TSore>({
  cart: initialValue,
  dispatch: () => {},
});

// the reducer function
const reducer = (state: TCartState, action: TCartAction): TCartState => {
  switch (action.type) {
    case "set_items":
      state = { ...state, items: action.payload };
      break;

    case "toggle_item":
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      /**
       * we make sure to use destructuring of arrays & objects so the react can identify the state change.
       * make sure to never edit objects & arrays 'in-place' (ex: items.selected = !items.selected).
       * remember our discussion on Object references.
       */

      const items = [...state.items];
      let item = items[index];
      item = { ...item, selected: !item.selected };
      items.splice(index, 1, item);
      state = { ...state, items };

    default:
      break;
  }

  // its best practice to use functions to seperate specialised operations and keep our files clean.
  const { sum, total, discount } = getCartCalculation(state);
  state = { ...state, sum, total, discount };

  return state;
};

function CartProvider({ children }: TProps) {
  const [cart, dispatch] = useReducer(reducer, initialValue);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
