import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

function HeaderStatus() {
  return (
    <div className="heaer-status flex gap-1 items-center">
      <Badge variant="secondary">
        <span className="font-semibold">My Cart</span>
        <span className="text-right">(2) - $ 300.00</span>
      </Badge>
      <Separator decorative orientation="vertical" />
      <Button type="button" variant="link" className="cursor-pointer">
        Logout
      </Button>
    </div>
  );
}

export default HeaderStatus;
