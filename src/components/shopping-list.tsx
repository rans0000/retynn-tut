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

function ShoppingList() {
  return (
    <div className="shopping-list-wrapper px-5 pt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] font-bold"></TableHead>
            <TableHead className="font-bold">Item</TableHead>
            <TableHead className="text-right font-bold">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="h-24 text-center">
                No shopping items!!.
              </TableCell>
            </TableRow>
          )}
          {items.length > 0 &&
            items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="align-middle">
                  <Checkbox checked={item.selected} />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell className="text-right">
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
        disabled={items.length === 0}
        className="cursor-pointer"
      >
        Buy Items
      </Button>
    </div>
  );
}

export default ShoppingList;
