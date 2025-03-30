import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CartList from "./cart-list";

type TProps = { isOopen: boolean; onClose: () => void; onSubmit: () => void };

function ShoppingCartDialog({ isOopen, onClose, onSubmit }: TProps) {
  return (
    <Dialog open={isOopen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>my Cart</DialogTitle>
        </DialogHeader>
        <CartList />
        <DialogFooter>
          <Button
            variant="outline"
            type="button"
            className="cursor-pointer"
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            variant="default"
            type="button"
            className="cursor-pointer"
            onClick={onSubmit}
          >
            Buy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ShoppingCartDialog;
