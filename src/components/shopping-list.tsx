"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TItem } from "@/lib/types";
import { CartContext } from "@/providers/cart-provider";
import { useContext, useEffect } from "react";

type TProps = { items: TItem[] };

/**
 * This is a client component to which the server sents the props.
 * We load the data into the context (state) so we can manipulate it.
 */

function ShoppingList({ items }: TProps) {
  const { cart, dispatch } = useContext(CartContext);

  useEffect(() => {
    // load data into the context on component load
    dispatch({ type: "set_items", payload: items });
  }, []);

  return (
    <div className="shopping-list-wrapper px-5 pt-10">
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] font-bold"></TableHead>
            <TableHead className="font-bold">Item</TableHead>
            <TableHead className="text-right font-bold">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.items.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="h-24 text-center">
                No shopping items!!.
              </TableCell>
            </TableRow>
          )}
          {cart.items.length > 0 &&
            cart.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="align-middle">
                  <Checkbox
                    className="cursor-pointer"
                    checked={item.selected}
                    onCheckedChange={() =>
                      dispatch({ type: "toggle_item", payload: item })
                    }
                  />
                </TableCell>
                <TableCell className="text-ellipsis overflow-hidden">
                  {item.title}
                </TableCell>
                <TableCell className="text-right font-mono">
                  $ {item.price.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Separator className="my-5" />
      <Button
        variant="outline"
        type="button"
        disabled={cart.items.length === 0}
        className="cursor-pointer"
      >
        Buy Items
      </Button>
    </div>
  );
}

export default ShoppingList;
