import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { retynConstants } from "@/lib/constant";
import { CartContext } from "@/providers/cart-provider";
import { useContext } from "react";

function CartList() {
  const { cart } = useContext(CartContext);

  return (
    <Table className="table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Item</TableHead>
          <TableHead className="text-right font-bold">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.items.length > 0 &&
          cart.items
            .filter((item) => item.selected)
            .map((item) => (
              <TableRow key={item.id}>
                <TableCell className="overflow-hidden text-ellipsis">
                  {item.title}
                </TableCell>
                <TableCell className="text-right font-mono">
                  $ {item.price.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
      <TableFooter>
        {cart.discount !== 1 && (
          <TableRow>
            <TableCell>Dicount</TableCell>
            <TableCell className="text-right font-mono">
              $ {(cart.sum * (1 - cart.discount)).toFixed(2)} (
              {retynConstants.discountPercentage * 100}%)
            </TableCell>
          </TableRow>
        )}
        <TableRow>
          <TableCell>
            <span className="font-bold">Total</span>
          </TableCell>
          <TableCell className="text-right align-middle">
            <span className="font-bold font-mono">
              ${(cart.sum * cart.discount).toFixed(2)}
            </span>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default CartList;
