import React from "react";

function layout({ children }: { children: React.ReactElement }) {
  return <div>About layout {children}</div>;
}

export default layout;
