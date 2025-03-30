import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CartList from "./cart-list";

type TProps = { isOopen: boolean };

function ShoppingCartDialog({ isOopen }: TProps) {
  return (
    <Dialog open={isOopen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>my Cart</DialogTitle>
        </DialogHeader>
        <CartList />
        <DialogFooter>
          <Button variant="outline" type="button" className="cursor-pointer">
            Close
          </Button>
          <Button variant="default" type="button" className="cursor-pointer">
            Buy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ShoppingCartDialog;
