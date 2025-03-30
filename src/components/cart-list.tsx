import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TItem } from "@/lib/types";

const items: TItem[] = [
  {
    id: 0,
    title: "string",
    price: 0.1,
    description: "string",
    category: "string",
    image: "http://example.com",
    selected: false,
  },
  {
    id: 1,
    title: "string",
    price: 0.1,
    description: "string",
    category: "string",
    image: "http://example.com",
    selected: true,
  },
];

function CartList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Item</TableHead>
          <TableHead className="text-right font-bold">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.length > 0 &&
          items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell className="text-right">
                $ {item.price.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Dicount</TableCell>
          <TableCell className="text-right">$ 30.00 (5%)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span className="font-bold">
              Total{" "}
              <span className="font-normal text-xs text-gray-600 pr-1.5">
                ($200.00 - $10.00)
              </span>
            </span>
          </TableCell>
          <TableCell className="text-right align-middle">
            <span className="font-bold">$190.00</span>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default CartList;
