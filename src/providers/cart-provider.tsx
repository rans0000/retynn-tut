"use client";

import { TCartAction, TCartState } from "@/lib/types";
import { getCartCalculation } from "@/lib/utils";
import React, { ActionDispatch, createContext, useReducer } from "react";

type TProps = { children: React.ReactNode };
type TSore = [
  cart: TCartState,
  dispatch?: ActionDispatch<[action: TCartAction]>
];

const initialValue: TCartState = { items: [], sum: 0, total: 0, discount: 0 };
export const CartContext = createContext<TSore>([initialValue, undefined]);

const reducer = (state: TCartState, action: TCartAction): TCartState => {
  switch (action.type) {
    case "set_items":
      state = { ...state, items: action.payload };
      break;

    case "toggle_item":
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        const items = [...state.items, action.payload];
        state = { ...state, items };
      } else {
        const items = state.items;
        items.splice(index, 1);
        state = { ...state, items };
      }

    default:
      break;
  }

  const { sum, total, discount } = getCartCalculation(state);
  state = { ...state, sum, total, discount };

  return state;
};

function CartProvider({ children }: TProps) {
  const [cart, dispatch] = useReducer(reducer, initialValue);
  return (
    <CartContext.Provider value={[cart, dispatch]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
