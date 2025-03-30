import { retynConstants } from "@/lib/constant";
import { TItem } from "@/lib/types";

/**
 * This folder should contain defenitions for loading & transforming data.
 * Extracting fetch functions in a centralised area makes them reusable and easiy to maintain.
 */

export const fetchProducts = async (limit: number = 10) => {
  // all async calls should have try...catch block to capture unexpected errors.
  try {
    return fetch(`${retynConstants.url}/products`)
      .then((response) => response.json())
      .then((data: TItem[]) =>
        data.map((item) => ({ ...item, selected: false })).splice(0, limit)
      );
  } catch {
    // this is a very simple way of handling the error. We simply send an empty array back.
    // production could handle errors in more nuansed ways, ex: sending error messages etc.
    return [];
  }
};
