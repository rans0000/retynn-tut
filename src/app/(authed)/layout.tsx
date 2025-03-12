import Sidebar from "@/componnets/Sidebar";
import React from "react";

function layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex">
      <Sidebar /> <div className="grow">{children}</div>
      {/* <Cli /> */}
    </div>
  );
}

export default layout;
