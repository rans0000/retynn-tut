import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { retynConstants } from "./constant";
import { TCartState } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCartCalculation = (state: TCartState) => {
  const { sum, total } = state.items.reduce(
    (acc, curr) => {
      return curr.selected
        ? { sum: acc.sum + curr.price, total: acc.total + 1 }
        : { sum: acc.sum, total: acc.total };
    },
    { sum: 0, total: 0 }
  );

  return {
    sum,
    total,
    discount:
      total > retynConstants.discountQualifier
        ? 1 - retynConstants.discountPercentage
        : 0,
  };
};
